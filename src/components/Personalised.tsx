import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import type { Content } from "@/content";

export default function Personalised({
  copy,
}: {
  copy: Content["personalised"];
}) {
  return (
    <section className="bg-blush py-10 md:py-16">
      <div className="mx-auto max-w-[1240px] px-4 md:px-8">
        <Reveal>
          <div className="grid items-center gap-3 lg:grid-cols-2">
            <div className="text-center">
              <h2 className="font-serif text-[1.9rem] leading-tight text-foreground sm:text-4xl">
                {copy.heading}
              </h2>
              <p className="mt-3 text-balance font-script text-[2.1rem] leading-[1.25] text-foreground sm:text-[2.6rem]">
                {copy.subheading}
              </p>
              <p className="mx-auto mt-6 max-w-[22rem] font-serif text-base leading-[1.55] text-foreground sm:text-lg">
                {copy.body}
              </p>
            </div>

            <div className="relative aspect-[3/2] w-full lg:aspect-[4/3]">
              <Photo
                photo={copy.photos.brushes}
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-3 grid gap-3 lg:grid-cols-2">
            {/* Same frame as the brushes photo on a phone, so the pair matches;
              portrait from lg up, where it sits beside the card. */}
            <div className="relative aspect-[3/2] w-full lg:aspect-[3/4]">
              <Photo
                photo={copy.photos.boards}
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>

            <div className="flex flex-col justify-center bg-cream px-7 py-10 sm:px-10">
              <h2 className="text-center font-serif text-3xl tracking-[0.04em] text-foreground sm:text-4xl lg:text-[2.9rem] lg:leading-[1.15]">
                {copy.consider.heading}
              </h2>
              {/* Bulleted and left-aligned, but the block itself sits centred
                under the heading, as the mockup has it. */}
              <ul className="mx-auto mt-7 w-fit list-disc space-y-1.5 pl-6 text-left font-serif text-base leading-[1.5] text-foreground sm:text-lg">
                {copy.consider.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
