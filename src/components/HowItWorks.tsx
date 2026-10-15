import Reveal from "@/components/Reveal";
import type { Content } from "@/content";

export default function HowItWorks({
  copy,
}: {
  copy: Content["howItWorks"];
}) {
  return (
    <section id="how-it-works" className="bg-charcoal py-12 md:py-20">
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <Reveal>
          <h2 className="text-center font-serif text-3xl tracking-[0.06em] text-cream sm:text-4xl lg:text-[2.6rem]">
            {copy.heading}
          </h2>
        </Reveal>

        {/* Three steps to a row, counted in columns of two so the pair left
            over on the last row sits centred rather than hard left. */}
        <ol className="mt-10 grid gap-9 sm:grid-cols-4 lg:grid-cols-6 lg:gap-x-12 lg:gap-y-14">
          {copy.steps.map((step, index) => (
            <li
              key={step.title}
              className={`sm:col-span-2 ${
                index === 3
                  ? "lg:col-start-2"
                  : index === 4
                    ? "sm:col-start-2 lg:col-start-4"
                    : ""
              }`}
            >
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
