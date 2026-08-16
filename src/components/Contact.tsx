import Reveal from "@/components/Reveal";
import TornEdge from "@/components/TornEdge";
import { GlobeIcon, MailIcon, PhoneIcon } from "@/components/Icons";
import { contact } from "@/content/site";

export default function Contact() {
  // Email, then phone, then website — the order the mockup lists them in.
  const rows = [
    {
      key: "email",
      Icon: MailIcon,
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      key: "phone",
      Icon: PhoneIcon,
      value: contact.phone,
      href: `tel:${contact.phone.replace(/\s+/g, "")}`,
    },
    {
      key: "website",
      Icon: GlobeIcon,
      value: contact.website,
      href: contact.website || null,
    },
  ];

  return (
    <section id="contact" className="bg-pink">
      {/* Torn top edge, so the paper appears ripped away from the band above. */}
      <div className="text-paper">
        <TornEdge flip className="h-12 sm:h-16" />
      </div>

      <div className="paper-texture">
        <div className="mx-auto max-w-[1240px] px-6 pt-10 pb-24 md:px-16 md:pt-14 md:pb-32">
          <Reveal>
            <h2 className="font-serif text-3xl tracking-[0.01em] text-foreground sm:text-4xl lg:text-5xl">
              {contact.heading}
            </h2>

            <dl className="mt-10 space-y-6">
              {rows.map(({ key, Icon, value, href }) => (
                <div key={key} className="flex items-center gap-8">
                  <dt className="shrink-0">
                    <Icon className="h-7 w-7 text-rust" />
                    <span className="sr-only">{key}</span>
                  </dt>
                  <dd className="text-lg text-foreground sm:text-xl">
                    {href ? (
                      <a
                        href={href}
                        className="transition-colors hover:text-rust"
                      >
                        {value}
                      </a>
                    ) : (
                      // The mockup leaves the website row blank; nothing to link yet.
                      <span className="sr-only">Website not provided</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>

      <div className="text-paper">
        <TornEdge className="h-12 sm:h-16" />
      </div>
    </section>
  );
}
