import SectionHeading from "@/components/SectionHeading";
import { contact } from "@/content/site";

const DETAILS = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  {
    label: "Phone",
    value: contact.phone,
    href: `tel:${contact.phone.replace(/\s+/g, "")}`,
  },
  { label: "Studio", value: contact.address, href: null },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-dark py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2 md:gap-20 md:px-10">
        <div>
          <SectionHeading
            eyebrow={contact.eyebrow}
            heading={contact.heading}
            intro={contact.intro}
            tone="dark"
          />

          <a
            href={`mailto:${contact.email}`}
            className="mt-10 inline-block border border-cream/50 px-8 py-3 text-xs tracking-[0.2em] text-cream uppercase transition-colors hover:border-accent hover:bg-accent hover:text-dark"
          >
            Start a Project
          </a>
        </div>

        <dl className="space-y-8 md:pt-4">
          {DETAILS.map((detail) => (
            <div
              key={detail.label}
              className="border-b border-cream/10 pb-6 last:border-0"
            >
              <dt className="text-xs tracking-[0.25em] text-accent uppercase">
                {detail.label}
              </dt>
              <dd className="mt-3 font-serif text-lg text-cream">
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="transition-colors hover:text-accent"
                  >
                    {detail.value}
                  </a>
                ) : (
                  detail.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
