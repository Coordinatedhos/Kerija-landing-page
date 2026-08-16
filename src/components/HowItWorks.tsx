import Reveal from "@/components/Reveal";
import { howItWorks } from "@/content/site";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-charcoal py-16 md:py-20">
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <Reveal>
          <h2 className="text-center font-serif text-3xl tracking-[0.06em] text-cream sm:text-4xl lg:text-[2.6rem]">
            {howItWorks.heading}
          </h2>
        </Reveal>

        {/* Five steps over three columns leaves 4 and 5 on the second row,
            left-aligned under 1 and 2 — the arrangement the mockup uses. */}
        <ol className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-14">
          {howItWorks.steps.map((step, index) => (
            <li key={step.title}>
              {/* Stepped delays so they count themselves in, one to five. */}
              <Reveal delay={index * 110} className="text-center">
                <span
                  aria-hidden="true"
                  className="block font-script text-6xl leading-none text-pink"
                >
                  {index + 1}
                </span>
                <h3 className="mt-3 font-serif text-[15px] text-cream underline underline-offset-[5px]">
                  {step.title}
                </h3>
                <p className="mt-1.5 font-serif text-[15px] leading-[1.5] text-cream/90">
                  {step.body}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
