import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import Ticker from "@/components/Ticker";
import { eventsWeDo } from "@/content/site";

export default function EventsWeDo() {
  return (
    <section id="events" className="bg-cream pt-12 pb-14 md:pt-16">
      <div className="mx-auto max-w-[1240px] px-4 md:px-8">
        {/* Sizing the circle off the card's height rather than the column width
            is what keeps the two flush top and bottom, as the mockup has them. */}
        <Reveal>
          <div className="relative">
            <div className="relative z-10 mx-auto mb-8 aspect-square w-56 overflow-hidden rounded-full sm:w-80 lg:absolute lg:top-0 lg:left-0 lg:mx-0 lg:mb-0 lg:h-full lg:w-auto">
              <Photo
                photo={eventsWeDo.photo}
                sizes="(min-width: 1024px) 34vw, 20rem"
              />
            </div>

            <div className="bg-charcoal px-6 py-12 text-center sm:px-10 lg:ml-[14%] lg:py-24 lg:pr-14 lg:pl-[26%]">
              <h2 className="font-serif text-3xl tracking-[0.06em] text-cream sm:text-4xl lg:text-[2.7rem]">
                {eventsWeDo.heading}
              </h2>
              <div className="mx-auto mt-7 max-w-[26rem]">
                {eventsWeDo.body.map((paragraph) => (
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
      <div className="mx-auto mt-12 max-w-[1240px] px-4 md:px-8">
        <div className="border-y border-foreground/25 py-3">
          <Ticker
            items={eventsWeDo.types}
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
