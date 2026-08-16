import Image from "next/image";
import BookingLink from "@/components/BookingLink";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { plan } from "@/content/site";

export default function PlanExperience() {
  return (
    <section className="relative isolate">
      <Image
        src={plan.background.src}
        alt={plan.background.alt}
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-cream/20" />

      <div className="mx-auto max-w-[1240px] px-4 py-14 md:px-8 md:py-16">
        <Reveal>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch">
            <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:w-[34%]">
              <Photo
                photo={plan.photo}
                sizes="(min-width: 1024px) 34vw, 100vw"
              />
            </div>

            <div className="flex flex-1 items-center gap-8 bg-cream px-6 py-12 sm:px-10 lg:py-14">
              <div className="flex-1 text-center">
                <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl">
                  {plan.lead}{" "}
                  <span className="font-script text-[1.45em] leading-none">
                    {plan.accent}
                  </span>
                </h2>
                <p className="mx-auto mt-4 max-w-[34rem] text-sm leading-relaxed text-foreground/75 sm:text-base">
                  {plan.body}
                </p>
                <BookingLink className="mt-8 inline-block bg-charcoal px-10 py-4 text-[11px] font-semibold tracking-[0.18em] text-cream uppercase transition-colors hover:bg-foreground">
                  {plan.cta}
                </BookingLink>
              </div>

              {/* Small companion photo tucked inside the card, as the
                  reference band does. Decorative, so it goes on wider
                  screens only. */}
              <div className="relative hidden aspect-[3/4] w-[8.5rem] shrink-0 lg:block">
                <Photo photo={plan.inset} sizes="8.5rem" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
