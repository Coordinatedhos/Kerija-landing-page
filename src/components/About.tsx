import Image from "next/image";
import TornEdge from "@/components/TornEdge";
import { about } from "@/content/site";

export default function About() {
  return (
    <section id="about" className="relative isolate">
      <Image
        src={about.background.src}
        alt={about.background.alt}
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />

      <div className="mx-auto max-w-[1240px] px-4 pt-10 pb-16 md:px-8 md:pb-24">
        <div className="text-paper">
          <div className="paper-texture px-6 pt-10 pb-6 sm:px-12 sm:pt-12">
            <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
              {about.heading}
            </h2>
            <div className="mt-4 space-y-4">
              {about.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="font-serif text-base leading-relaxed text-foreground sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <TornEdge className="h-8 sm:h-10" />
        </div>
      </div>
    </section>
  );
}
