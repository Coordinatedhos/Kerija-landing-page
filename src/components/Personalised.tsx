import Photo from "@/components/Photo";
import { personalised } from "@/content/site";

export default function Personalised() {
  return (
    <section className="bg-blush py-14 md:py-16">
      <div className="mx-auto max-w-[1240px] px-4 md:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-6">
          <div className="text-center lg:col-span-5 lg:col-start-1">
            <h2 className="font-serif text-[1.9rem] leading-tight font-bold text-foreground sm:text-4xl">
              {personalised.heading}
            </h2>
            <p className="mt-2 font-serif text-lg font-semibold text-foreground sm:text-xl">
              {personalised.subheading}
            </p>
            <p className="mx-auto mt-8 max-w-[22rem] font-serif text-base leading-[1.55] text-foreground sm:text-lg">
              {personalised.body}
            </p>
          </div>

          <div className="relative aspect-[9/8] w-full lg:col-span-7 lg:col-start-6">
            <Photo
              photo={personalised.photos.brushes}
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
          </div>
        </div>

        {/* Flush against the block above on desktop, as the mockup stacks them. */}
        <div className="mt-10 grid items-center gap-8 lg:mt-2 lg:grid-cols-12 lg:gap-0">
          {/* Two halves of the same workshop photo, stacked and offset the way
              the mockup collages them: the children above, the table of
              supplies below. Each aspect matches its file, so nothing is
              trimmed again here. */}
          <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1">
            <div className="relative aspect-[4/3] w-[70%]">
              <Photo
                photo={personalised.photos.children}
                sizes="(min-width: 1024px) 29vw, 70vw"
              />
            </div>
            <div className="relative -mt-1 aspect-[32/9] w-full">
              <Photo
                photo={personalised.photos.supplies}
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
            </div>
          </div>

          <div className="bg-cream px-7 py-10 sm:px-10 lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:py-12">
            <h2 className="font-serif text-3xl tracking-[0.04em] text-foreground sm:text-4xl">
              {personalised.consider.heading}
            </h2>
            <dl className="mt-6">
              {personalised.consider.items.map((item) => (
                <div key={item.label} className="mt-4 first:mt-0">
                  <dt className="font-serif text-base text-foreground sm:text-lg">
                    <span aria-hidden="true" className="mr-1.5">
                      {item.icon}
                    </span>
                    {item.label}
                  </dt>
                  <dd className="font-serif text-base leading-[1.45] text-foreground sm:text-lg">
                    {item.body}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
