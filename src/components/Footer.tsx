import { brand } from "@/content/site";

// The mockup ends on an empty dusty-pink band, so this stays deliberately bare.
export default function Footer() {
  return (
    <footer className="bg-pink">
      <div className="mx-auto max-w-[1240px] px-6 py-14 md:px-16 md:py-20">
        <p className="font-serif text-xl tracking-[0.02em] text-foreground">
          {brand.name}
        </p>
        <p className="mt-2 text-xs tracking-[0.06em] text-foreground/60">
          © {new Date().getFullYear()} {brand.name}. {brand.tagline}.
        </p>
      </div>
    </footer>
  );
}
