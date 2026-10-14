import type { Content } from "@/content";

export default function Masthead({
  brand,
  copy,
}: {
  brand: Content["brand"];
  copy: Content["masthead"];
}) {
  return (
    <div className="bg-cream">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-5 px-5 py-6 text-center md:grid-cols-[1fr_auto_1fr] md:gap-0 md:px-0 md:py-0">
        <div className="order-2 md:order-none md:border-r md:border-rust/25 md:px-10 md:py-10">
          <p className="font-serif text-base leading-snug text-foreground md:text-xl">
            {copy.left.question}
          </p>
          <a
            href={copy.left.link.href}
            className="mt-2 inline-block py-2.5 text-[12px] font-semibold tracking-[0.08em] whitespace-pre text-foreground uppercase transition-colors hover:text-rust md:mt-3 md:py-0"
          >
            {copy.left.link.label}
          </a>
        </div>

        <div className="order-1 px-2 md:order-none md:px-14 md:py-10">
          <p className="font-serif text-4xl leading-none tracking-[0.02em] text-foreground sm:text-5xl lg:text-6xl">
            {brand.name}
          </p>
          <hr className="mt-3 border-t border-foreground/60" />
          <p className="mt-2 font-serif text-lg text-foreground sm:text-xl lg:text-2xl">
            {brand.tagline}
          </p>
        </div>

        <div className="order-3 md:order-none md:border-l md:border-rust/25 md:px-10 md:py-10">
          <p className="font-serif text-base leading-snug text-foreground md:text-xl">
            {copy.right.question}
          </p>
          <p className="mt-2 text-[11px] font-semibold tracking-[0.04em] text-foreground uppercase md:mt-3 md:text-[10px]">
            {copy.right.note}
          </p>
        </div>
      </div>
    </div>
  );
}
