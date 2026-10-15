import Reveal from "@/components/Reveal";
import TornEdge from "@/components/TornEdge";
import type { Content } from "@/content";

export default function About({ copy }: { copy: Content["about"] }) {
  return (
    <section id="about" className="relative z-10 isolate">

      <div className="mx-auto max-w-[1240px] px-4 pt-8 pb-8 md:px-8 md:pt-24 md:pb-24">
        {/* Torn on the top and bottom edges, cut clean on the sides. */}
        <div className="text-paper">
          <TornEdge flip className="h-12 sm:h-32 lg:h-40" />
          <div className="paper-texture px-6 pb-4 sm:px-12">
            <Reveal>
              <h2 className="font-script text-[2.9rem] leading-[1.2] text-foreground sm:text-[3.6rem]">
                {copy.heading}
              </h2>
              {/* The mockup runs the paragraphs together with no gap between. */}
              <div className="mt-5">
                {copy.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="font-serif text-lg leading-[1.55] text-foreground sm:text-xl lg:text-[1.55rem]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
          <TornEdge className="h-12 sm:h-32 lg:h-40" />
        </div>
      </div>
    </section>
  );
}
