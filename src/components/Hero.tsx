import Image from "next/image";
import { hero } from "@/content/site";

export default function Hero() {
  return (
    // z-20 keeps the photo above the About section it overhangs; no
    // overflow-hidden, or that overhang would be clipped off.
    <section id="home" className="relative z-20 isolate">
      <Image
        src={hero.background.src}
        alt={hero.background.alt}
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      {/* The mockup's backdrop is heavily blurred and lightened behind the card. */}
      <div className="absolute inset-0 -z-10 bg-cream/25 backdrop-blur-[3px]" />

      <div className="mx-auto max-w-[1400px] px-4 pt-10 pb-10 md:px-8 md:pt-14 md:pb-0">
        <div className="grid items-start gap-6 lg:grid-cols-12 lg:gap-0">
          <div className="bg-slate px-8 py-14 sm:px-12 lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:py-24 lg:pr-24">
            <h1 className="font-serif text-3xl leading-tight tracking-[0.02em] text-white sm:text-4xl lg:text-[2.9rem]">
              {hero.heading}
            </h1>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-muted">
              {hero.body}
            </p>
            <a
              href={hero.cta.href}
              className="mt-10 inline-block border border-white/70 px-9 py-4 text-[11px] font-semibold tracking-[0.12em] text-white uppercase transition-colors hover:bg-white hover:text-slate"
            >
              {hero.cta.label}
            </a>
          </div>

          {/* Explicit row keeps this in the same grid row as the card so the
              photo overlaps it, as in the mockup. The negative bottom margin
              lets it hang past the section and over the About card. */}
          <div className="relative z-10 aspect-[4/5] w-full lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:mt-16 lg:-mb-28 lg:aspect-[5/6]">
            <Image
              src={hero.photo.src}
              alt={hero.photo.alt}
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
