import BookingLink from "@/components/BookingLink";
import Reveal from "@/components/Reveal";
import { FacebookIcon, InstagramIcon } from "@/components/Icons";
import { brand, footer, nav } from "@/content/site";

const SOCIAL_ICONS = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
} as const;

export default function Footer() {
  // Two even columns of links, in the order they appear in the nav.
  const half = Math.ceil(nav.links.length / 2);
  const columns = [nav.links.slice(0, half), nav.links.slice(half)];

  return (
    <footer className="bg-pink">
      <div className="mx-auto max-w-[1240px] px-6 py-14 md:px-10 md:py-16">
        <Reveal>
          {/* Three panels split by hairlines, the way the reference footer
              divides menu, name and call to action. */}
          <div className="grid gap-10 text-center md:grid-cols-3 md:gap-0 md:text-left">
            <div className="md:pr-10">
              <h2 className="font-script text-4xl leading-none text-foreground">
                {footer.menuHeading}
              </h2>
              <div className="mt-5 flex justify-center gap-10 md:justify-start md:gap-8">
                {columns.map((column, index) => (
                  <ul key={index} className="space-y-2">
                    {column.map((link) => (
                      <li key={link.label}>
                        {link.booking ? (
                          <BookingLink className="text-[11px] tracking-[0.14em] text-foreground/80 uppercase transition-colors hover:text-rust">
                            {link.label}
                          </BookingLink>
                        ) : (
                          <a
                            href={link.href}
                            className="text-[11px] tracking-[0.14em] text-foreground/80 uppercase transition-colors hover:text-rust"
                          >
                            {link.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>

            <div className="md:border-x md:border-foreground/20 md:px-10 md:text-center">
              <p className="font-serif text-[2rem] leading-[1.05] tracking-[0.02em] text-foreground">
                {brand.name.split(" ").map((word) => (
                  <span key={word} className="block">
                    {word}
                  </span>
                ))}
              </p>
              <p className="mt-3 text-[11px] tracking-[0.14em] text-foreground/70 uppercase">
                {brand.tagline}
              </p>
            </div>

            <div className="md:pl-10 md:text-right">
              <p className="font-serif text-xl leading-snug text-foreground">
                {footer.note}
              </p>
              <BookingLink className="mt-6 inline-block bg-charcoal px-8 py-4 text-[11px] font-semibold tracking-[0.18em] text-cream uppercase transition-colors hover:bg-foreground">
                {footer.cta}
              </BookingLink>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col items-center gap-5 border-t border-foreground/20 pt-7 sm:flex-row sm:justify-between">
          <ul className="flex items-center gap-3">
            {nav.socials.map((social) => {
              const Icon =
                SOCIAL_ICONS[social.label as keyof typeof SOCIAL_ICONS];
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="block text-foreground/70 transition-colors hover:text-rust"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="text-[11px] tracking-[0.08em] text-foreground/60">
            © {new Date().getFullYear()} {brand.name}. {brand.tagline}.
          </p>
        </div>
      </div>
    </footer>
  );
}
