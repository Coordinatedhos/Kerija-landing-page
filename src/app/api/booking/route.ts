import { contact } from "@/content/site";

/**
 * Takes a booking enquiry and emails it to the studio.
 *
 * Delivery goes through Resend, over plain fetch so there is no SDK to keep
 * up to date. Set RESEND_API_KEY and BOOKING_FROM_EMAIL (a sender on a domain
 * verified with Resend, e.g. "Bloom Studio <hello@bloomstudio.lv>") in the
 * Vercel project's environment variables to switch it on.
 *
 * Until those exist this answers "not-configured", and the form falls back to
 * opening the visitor's own mail app with the message already written — so
 * the page works from the moment it deploys.
 */
export const runtime = "nodejs";

type Enquiry = {
  name: string;
  contact: string;
  eventType: string;
  date: string;
  location: string;
  guests: string;
  /** Hidden field, left empty by people and filled in by bots. */
  website?: string;
  subject?: string;
};

const FIELDS = [
  "name",
  "contact",
  "eventType",
  "date",
  "location",
  "guests",
] as const;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, 500) : "";
}

export async function POST(request: Request) {
  let body: Partial<Enquiry>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, reason: "bad-request" }, { status: 400 });
  }

  // A bot filled the honeypot. Answer as if sent, and send nothing.
  if (clean(body.website)) return Response.json({ ok: true });

  const enquiry = Object.fromEntries(
    FIELDS.map((field) => [field, clean(body[field])]),
  ) as Record<(typeof FIELDS)[number], string>;

  if (FIELDS.some((field) => !enquiry[field])) {
    return Response.json({ ok: false, reason: "incomplete" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.BOOKING_FROM_EMAIL;
  if (!apiKey || !from) {
    return Response.json(
      { ok: false, reason: "not-configured" },
      { status: 501 },
    );
  }

  const lines = FIELDS.map((field) => `${field}: ${enquiry[field]}`).join("\n");

  // Anything that goes wrong here — a refused request as much as a rejected
  // one — comes back as send-failed, and the form shows the studio's address
  // so the enquiry still has somewhere to go.
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        authorization: `Bearer ${apiKey}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [contact.email],
        // A reply then goes straight back to whoever filled the form in, when
        // what they left is an email address rather than a phone number.
        reply_to: enquiry.contact.includes("@") ? enquiry.contact : undefined,
        subject: `${clean(body.subject) || "Booking enquiry"} — ${enquiry.name}`,
        text: lines,
      }),
    });

    if (!response.ok) {
      console.error(
        "Resend rejected the enquiry",
        response.status,
        await response.text(),
      );
      return Response.json(
        { ok: false, reason: "send-failed" },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Could not reach Resend", error);
    return Response.json({ ok: false, reason: "send-failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
