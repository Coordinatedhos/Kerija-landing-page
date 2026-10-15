import type { Content } from "@/content";

/** The brand, on its own. The two question blocks that flanked it are gone. */
export default function Masthead({ brand }: { brand: Content["brand"] }) {
  return (
    <div className="bg-cream">
      <div className="mx-auto max-w-[1400px] px-5 py-7 text-center md:py-10">
        <p className="font-serif text-4xl leading-none tracking-[0.02em] text-foreground sm:text-5xl lg:text-6xl">
          {brand.name}
        </p>
        <hr className="mx-auto mt-3 max-w-[22rem] border-t border-foreground/60 sm:max-w-[26rem] lg:max-w-[32rem]" />
        <p className="mt-2 font-serif text-lg text-foreground sm:text-xl lg:text-2xl">
          {brand.tagline}
        </p>
      </div>
    </div>
  );
}
