"use client";

import { useState } from "react";
import type { Content } from "@/content";

type Field = "name" | "contact" | "eventType" | "date" | "location" | "guests";

const FIELDS: Field[] = [
  "name",
  "contact",
  "eventType",
  "date",
  "location",
  "guests",
];

const EMPTY: Record<Field, string> = {
  name: "",
  contact: "",
  eventType: "",
  date: "",
  location: "",
  guests: "",
};

const INPUT =
  "w-full border border-foreground/25 bg-white px-4 py-3 font-sans text-[15px] text-foreground outline-none transition-colors placeholder:text-foreground/35 focus:border-rust";

export default function BookingForm({
  copy,
  email,
}: {
  copy: Content["bookingForm"];
  /** Where the enquiry goes, and the address shown if sending fails. */
  email: string;
}) {
  const [values, setValues] = useState(EMPTY);
  const [state, setState] = useState<"idle" | "sending" | "sent" | "failed">(
    "idle",
  );
  const [handedOver, setHandedOver] = useState(false);

  function set(field: Field, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  /** The enquiry as an email, for when the site has no mail service of its own. */
  function mailtoHref() {
    const body = FIELDS.map(
      (field) => `${copy.fields[field]}: ${values[field]}`,
    ).join("\n");
    return `mailto:${email}?subject=${encodeURIComponent(
      `${copy.emailSubject} — ${values.name}`,
    )}&body=${encodeURIComponent(body)}`;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");

    const form = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...values,
          website: form.get("website"),
          subject: copy.emailSubject,
        }),
      });

      if (response.ok) {
        setState("sent");
        return;
      }

      // No mail service configured yet: hand the finished message to the
      // visitor's own mail app rather than losing the enquiry.
      const { reason } = (await response.json()) as { reason?: string };
      if (reason === "not-configured") {
        setHandedOver(true);
        setState("sent");
        window.location.href = mailtoHref();
        return;
      }
      setState("failed");
    } catch {
      setState("failed");
    }
  }

  if (state === "sent") {
    return (
      <div className="bg-cream px-7 py-14 text-center sm:px-12">
        <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
          {copy.success.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-[30rem] text-[15px] leading-relaxed text-foreground/75">
          {handedOver ? copy.mailto : copy.success.body}
        </p>
        {handedOver ? (
          <a
            href={mailtoHref()}
            className="mt-6 inline-block text-[12px] tracking-[0.12em] text-rust uppercase underline underline-offset-4"
          >
            {email}
          </a>
        ) : null}
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-cream px-7 py-10 sm:px-12 sm:py-12"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {FIELDS.map((field) => (
          <label
            key={field}
            className={`block ${field === "name" || field === "contact" ? "sm:col-span-1" : ""}`}
          >
            <span className="mb-2 block text-[11px] font-semibold tracking-[0.14em] text-foreground/70 uppercase">
              {copy.fields[field]}
            </span>
            <input
              name={field}
              required
              value={values[field]}
              onChange={(event) => set(field, event.target.value)}
              className={INPUT}
              {...(field === "date"
                ? { type: "date" }
                : field === "guests"
                  ? { type: "number", min: 1, placeholder: copy.hints.guests }
                  : {
                      type: "text",
                      placeholder: copy.hints[field as keyof typeof copy.hints],
                    })}
            />
          </label>
        ))}
      </div>

      {/* Bots fill this in; people never see it. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <button
        type="submit"
        disabled={state === "sending"}
        className="mt-8 w-full bg-charcoal px-10 py-4 text-[11px] font-semibold tracking-[0.18em] text-cream uppercase transition-colors hover:bg-foreground disabled:opacity-60 sm:w-auto"
      >
        {state === "sending" ? copy.sending : copy.submit}
      </button>

      {state === "failed" ? (
        <p role="alert" className="mt-5 text-[14px] text-rust">
          {copy.error}{" "}
          <a href={`mailto:${email}`} className="underline underline-offset-4">
            {email}
          </a>
        </p>
      ) : null}
    </form>
  );
}
