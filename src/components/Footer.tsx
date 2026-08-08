import { brand, footer } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-dark text-cream">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="font-serif text-lg tracking-wide">{brand.name}</p>
          <p className="mt-2 max-w-sm text-sm text-cream/50">{footer.note}</p>
        </div>

        <nav className="flex gap-6 text-xs tracking-[0.2em] uppercase">
          {footer.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="text-cream/70 transition-colors hover:text-accent"
            >
              {social.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-8 md:px-10">
        <p className="text-xs text-cream/40">
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
