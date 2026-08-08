import SectionHeading from "@/components/SectionHeading";
import { services } from "@/content/site";

export default function Services() {
  return (
    <section id="services" className="bg-dark py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow={services.eyebrow}
          heading={services.heading}
          intro={services.intro}
          align="center"
          tone="dark"
        />

        <ul className="mt-16 grid gap-px border border-cream/10 bg-cream/10 sm:grid-cols-2 lg:grid-cols-4">
          {services.items.map((item, index) => (
            <li key={item.title} className="bg-dark p-8">
              <span className="font-serif text-sm text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 font-serif text-xl text-cream">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/60">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
