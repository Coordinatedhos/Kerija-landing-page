import SectionHeading from "@/components/SectionHeading";
import { portfolio } from "@/content/site";

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow={portfolio.eyebrow}
          heading={portfolio.heading}
          intro={portfolio.intro}
          align="center"
        />

        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.items.map((item) => (
            <li key={item.title} className="group">
              {/*
                TODO: replace with a real photograph, e.g.
                <Image src="/images/portfolio/ashfield.jpg" alt="" fill className="object-cover" />
              */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-[linear-gradient(150deg,_#e3d9c8_0%,_#c4b39a_55%,_#a9825b_100%)]">
                <div className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="mt-5 font-serif text-lg text-foreground">
                {item.title}
              </h3>
              <p className="mt-1 text-xs tracking-[0.15em] text-foreground/50 uppercase">
                {item.meta}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
