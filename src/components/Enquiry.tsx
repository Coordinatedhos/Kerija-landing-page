import Photo from "@/components/Photo";
import { enquiry } from "@/content/site";

export default function Enquiry() {
  return (
    <section className="bg-charcoal py-10 md:py-14">
      <div className="mx-auto max-w-[1240px] px-4 md:px-8">
        {/* The photo is taller than the card and shares its row, so the dark
            section shows above and below the card exactly as in the mockup. */}
        <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-0">
          <div className="bg-cream px-7 py-10 sm:px-12 lg:col-span-7 lg:col-start-1 lg:row-start-1 lg:py-14 lg:pr-[26%]">
            <h2 className="text-center font-serif text-3xl tracking-[0.04em] text-foreground sm:text-4xl">
              {enquiry.heading}
            </h2>
            <ul className="mt-6 pl-2 font-serif text-lg text-foreground sm:pl-8 sm:text-xl">
              {enquiry.items.map((item) => (
                <li key={item} className="leading-[1.55]">
                  <span aria-hidden="true" className="mr-2">
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10 aspect-[4/3] w-full lg:col-span-6 lg:col-start-7 lg:row-start-1">
            <Photo
              photo={enquiry.photo}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
