import { brand, masthead } from "@/content/site";

export default function Masthead() {
  return (
    <div className="bg-cream">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-8 px-6 py-8 text-center md:grid-cols-[1fr_auto_1fr] md:gap-0 md:px-0 md:py-0">
        <div className="md:border-r md:border-rust/25 md:px-10 md:py-10">
          <p className="font-serif text-lg leading-snug text-foreground md:text-xl">
            {masthead.left.question}
          </p>
          <a
            href={masthead.left.link.href}
            className="mt-3 inline-block text-[11px] font-semibold tracking-[0.08em] whitespace-pre text-foreground uppercase transition-colors hover:text-rust"
          >
            {masthead.left.link.label}
          </a>
        </div>

        <div className="px-6 py-4 md:px-14 md:py-10">
          <p className="font-serif text-4xl leading-none tracking-[0.02em] text-foreground sm:text-5xl lg:text-6xl">
            {brand.name}
          </p>
          <hr className="mt-3 border-t border-foreground/60" />
          <p className="mt-2 font-serif text-lg text-foreground sm:text-xl lg:text-2xl">
            {brand.tagline}
          </p>
        </div>

        <div className="md:border-l md:border-rust/25 md:px-10 md:py-10">
          <p className="font-serif text-lg leading-snug text-foreground md:text-xl">
            {masthead.right.question}
          </p>
          <p className="mt-3 text-[10px] font-semibold tracking-[0.04em] text-foreground uppercase">
            {masthead.right.note}
          </p>
        </div>
      </div>
    </div>
  );
}
