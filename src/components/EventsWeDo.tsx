import Reveal from "@/components/Reveal";
import Ticker from "@/components/Ticker";
import type { Content } from "@/content";

export default function EventsWeDo({
  copy,
}: {
  copy: Content["eventsWeDo"];
}) {
  return (
    <section id="events" className="bg-cream pt-10 pb-10 md:pt-16 md:pb-14">
      <div className="mx-auto max-w-[1240px] px-4 md:px-8">
        {/* Sizing the circle off the card's height rather than the column width
            is what keeps the two flush top and bottom, as the mockup has them. */}
        <Reveal>
          <div className="relative">
            {/* The photo is this element's own background rather than an
                image inside it. Three attempts at clipping a child failed —
                border-radius on the box, border-radius on the image,
                clip-path — and each left the photo's corners painted over the
                card beside it. A background cannot be painted outside the box
                that owns it, in any engine, so there is nothing left to clip.
                The cost is next/image's resizing for this one photo, which is
                why the file is kept small. */}
            <div
              role="img"
              aria-label={copy.photo.alt}
              style={{ backgroundImage: `url(${copy.photo.src})` }}
              className="relative z-10 mx-auto mb-8 aspect-square w-56 rounded-full bg-cover bg-center sm:w-80 lg:absolute lg:top-0 lg:left-0 lg:mx-0 lg:mb-0 lg:h-full lg:w-auto"
            />

            <div className="bg-charcoal px-6 py-10 text-center sm:px-10 sm:py-12 lg:ml-[14%] lg:py-24 lg:pr-14 lg:pl-[26%]">
              <h2 className="font-serif text-3xl tracking-[0.06em] text-cream sm:text-4xl lg:text-[2.7rem]">
                {copy.heading}
              </h2>
              <div className="mx-auto mt-7 max-w-[26rem]">
                {copy.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="font-serif text-[15px] leading-[1.55] text-cream/90"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* The full list never fits on one line, so it scrolls through. */}
      <div className="mx-auto mt-9 max-w-[1240px] px-4 md:px-8">
        <div className="border-y border-foreground/25 py-3">
          <Ticker
            items={copy.types}
            separator=","
            separatorClassName="mr-5"
            itemClassName="font-serif text-lg text-foreground sm:text-xl"
            seconds={40}
          />
        </div>
      </div>
    </section>
  );
}
