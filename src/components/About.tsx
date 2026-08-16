import Image from "next/image";
import Reveal from "@/components/Reveal";
import TornEdge from "@/components/TornEdge";
import { about } from "@/content/site";

export default function About() {
  return (
    <section id="about" className="relative z-10 isolate">
      <Image
        src={about.background.src}
        alt={about.background.alt}
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />

      <div className="mx-auto max-w-[1240px] px-4 pt-16 pb-16 md:px-8 md:pt-24 md:pb-24">
        {/* Torn on the top and bottom edges, cut clean on the sides. */}
        <div className="text-paper">
          <TornEdge flip className="h-12 sm:h-16" />
          <div className="paper-texture px-6 pb-4 sm:px-12">
            <Reveal>
              <h2 className="font-serif text-4xl text-foreground sm:text-5xl">
                {about.heading}
              </h2>
              {/* The mockup runs the paragraphs together with no gap between. */}
              <div className="mt-3">
                {about.body.map((paragraph) => (
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
          <TornEdge className="h-12 sm:h-16" />
        </div>
      </div>
    </section>
  );
}
