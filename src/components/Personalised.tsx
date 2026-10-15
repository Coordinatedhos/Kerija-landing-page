import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import type { Content } from "@/content";

export default function Personalised({
  copy,
}: {
  copy: Content["personalised"];
}) {
  return (
    <section className="blush-fade py-10 md:py-16">
      <div className="mx-auto max-w-[1240px] px-4 md:px-8">
        <Reveal>
          <div className="mx-auto max-w-[44rem] text-center">
            <h2 className="font-serif text-[1.9rem] leading-tight text-foreground sm:text-4xl">
              {copy.heading}
            </h2>
            <p className="mt-3 text-balance font-script text-[2.1rem] leading-[1.25] text-foreground sm:text-[2.6rem]">
              {copy.subheading}
            </p>
            <p className="mx-auto mt-6 max-w-[30rem] font-serif text-base leading-[1.55] text-foreground sm:text-lg">
              {copy.body}
            </p>
          </div>
        </Reveal>

        {/* The pair shares one frame at every width, so the two sit level. */}
        <Reveal>
          <div className="mt-8 grid gap-3 lg:grid-cols-2">
            <div className="relative aspect-[3/2] w-full lg:aspect-auto lg:h-[27rem]">
              <Photo
                photo={copy.photos.brushes}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>

            <div className="relative aspect-[3/2] w-full lg:aspect-auto lg:h-[27rem]">
              <Photo
                photo={copy.photos.boards}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
