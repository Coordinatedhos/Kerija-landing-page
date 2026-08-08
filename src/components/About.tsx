import SectionHeading from "@/components/SectionHeading";
import { about } from "@/content/site";

export default function About() {
  return (
    <section id="about" className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2 md:items-center md:gap-20 md:px-10">
        <div>
          <SectionHeading eyebrow={about.eyebrow} heading={about.heading} />

          <div className="mt-6 space-y-5">
            {about.body.map((paragraph) => (
              <p
                key={paragraph}
                className="text-sm leading-relaxed text-foreground/70"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-foreground/10 pt-8">
            {about.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-serif text-3xl text-accent">
                    {stat.value}
                  </span>
                  <span className="mt-2 block text-xs tracking-[0.15em] text-foreground/60 uppercase">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/*
          TODO: replace with a real photograph, e.g.
          <Image src="/images/about.jpg" alt="" fill className="object-cover" />
        */}
        <div className="aspect-[4/5] w-full bg-[linear-gradient(160deg,_#e3d9c8_0%,_#c4b39a_55%,_#a9825b_100%)]" />
      </div>
    </section>
  );
}
