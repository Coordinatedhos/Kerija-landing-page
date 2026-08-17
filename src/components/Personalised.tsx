import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { personalised } from "@/content/site";

export default function Personalised() {
  return (
    <section className="bg-blush py-14 md:py-16">
      <div className="mx-auto max-w-[1240px] px-4 md:px-8">
        <Reveal>
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-6">
            <div className="text-center lg:col-span-5 lg:col-start-1">
              <h2 className="font-serif text-[1.9rem] leading-tight text-foreground sm:text-4xl">
                {personalised.heading}
              </h2>
              <p className="mt-2 font-serif text-lg font-bold text-foreground sm:text-xl">
                {personalised.subheading}
              </p>
              <p className="mx-auto mt-8 max-w-[22rem] font-serif text-base leading-[1.55] text-foreground sm:text-lg">
                {personalised.body}
              </p>
            </div>

            {/* z-10 so this photo covers the top corner of the card below it,
              which is how the mockup tucks the two together. */}
            <div className="relative z-10 aspect-[3/2] w-full lg:col-span-7 lg:col-start-6 lg:aspect-[9/8]">
              <Photo
                photo={personalised.photos.brushes}
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10 grid gap-8 lg:-mt-12 lg:grid-cols-12 lg:gap-0">
            {/* Two halves of one photo, cut over the same horizontal span, so
              at one width they share a scale and the scene runs on unbroken.
              They fill the column so the pair runs right up to the card, the
              way the mockup butts them together. The tiles crop shorter on
              small screens — the upper anchored to its bottom edge, the lower
              to its top — which keeps the join seamless. */}
            <div className="lg:col-span-6 lg:col-start-1 lg:row-start-1">
              <div className="relative aspect-[3/2] w-full lg:aspect-[4/3]">
                <Photo
                  photo={personalised.photos.children}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="relative aspect-[3/1] w-full lg:aspect-[19/9]">
                <Photo
                  photo={personalised.photos.supplies}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>

            <div className="bg-cream px-7 py-10 sm:px-10 lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:pt-16">
              <h2 className="text-center font-serif text-3xl tracking-[0.04em] text-foreground sm:text-4xl lg:text-[2.9rem] lg:leading-[1.15]">
                {personalised.consider.heading}
              </h2>
              {/* One continuous block of lines, no gaps between the four — the
                mockup runs them together at a single line height. */}
              <dl className="mt-6 font-serif text-base leading-[1.5] text-foreground sm:text-lg">
                {personalised.consider.items.map((item) => (
                  <div key={item.label}>
                    <dt>
                      {item.icon ? (
                        <span aria-hidden="true" className="mr-1.5">
                          {item.icon}
                        </span>
                      ) : null}
                      {item.label}
                    </dt>
                    <dd>{item.body}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
