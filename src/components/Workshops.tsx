import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import type { Content } from "@/content";

export default function Workshops({
  copy,
}: {
  copy: Content["workshops"];
}) {
  return (
    <section id="workshops" className="bg-cream">
      <div className="mx-auto max-w-[1240px] px-4 py-14 md:px-8 md:py-16">
        <Reveal>
          <h2 className="text-center font-serif text-3xl tracking-[0.02em] text-foreground sm:text-4xl lg:text-[2.6rem]">
            {copy.heading}
          </h2>
        </Reveal>

        <ul className="mt-10 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {copy.items.map((item, index) => (
            <li key={item.alt}>
              {/* Staggered so the four tiles arrive one after another. */}
              <Reveal delay={index * 90}>
                <div className="relative aspect-[2/3] w-full">
                  <Photo photo={item} sizes="(min-width: 1024px) 25vw, 50vw" />
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        {/* As in About, the mockup runs these paragraphs together with no gap. */}
        <Reveal className="mt-10">
          {copy.body.map((paragraph) => (
            <p
              key={paragraph}
              className="font-serif text-lg leading-[1.5] text-foreground sm:text-xl lg:text-[1.5rem]"
            >
              {paragraph}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
