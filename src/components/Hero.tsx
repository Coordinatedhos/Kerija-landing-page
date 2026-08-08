import { hero } from "@/content/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[640px] w-full items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top,_#3f382e_0%,_#1c1815_70%)] py-32 md:h-screen"
    >
      {/*
        TODO: replace this gradient with a real photograph, e.g.
        <Image src="/images/hero.jpg" alt="" fill className="object-cover" priority />
      */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-cream">
        <h1 className="font-serif text-4xl tracking-[0.05em] uppercase sm:text-5xl md:text-6xl">
          {hero.heading}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-xs tracking-[0.15em] text-cream/80 uppercase sm:text-sm">
          {hero.subheading}
        </p>
        <a
          href={hero.cta.href}
          className="mt-10 inline-block border border-cream/50 px-8 py-3 text-xs tracking-[0.2em] uppercase transition-colors hover:border-accent hover:bg-accent hover:text-dark"
        >
          {hero.cta.label}
        </a>
      </div>
    </section>
  );
}
