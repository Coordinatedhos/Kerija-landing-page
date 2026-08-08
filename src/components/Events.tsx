import Image from "next/image";
import { events } from "@/content/site";

export default function Events() {
  return (
    <section id="events" className="bg-cream">
      <div className="mx-auto max-w-[1240px] px-4 pt-4 pb-14 md:px-8">
        <div className="space-y-3">
          {events.body.map((paragraph) => (
            <p
              key={paragraph}
              className="font-serif text-lg leading-relaxed text-foreground sm:text-xl lg:text-2xl"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="relative aspect-[16/5] w-full">
        <Image
          src={events.band.src}
          alt={events.band.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
