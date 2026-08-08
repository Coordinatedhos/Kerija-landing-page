import Image from "next/image";
import { workshops } from "@/content/site";

export default function Workshops() {
  return (
    <section id="workshops" className="bg-cream py-16 md:py-20">
      <div className="mx-auto max-w-[1240px] px-4 md:px-8">
        <h2 className="text-center font-serif text-3xl tracking-[0.01em] text-foreground sm:text-4xl lg:text-5xl">
          {workshops.heading}
        </h2>

        <ul className="mt-12 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {workshops.items.map((item) => (
            <li key={item.src} className="relative aspect-[2/3] w-full">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
