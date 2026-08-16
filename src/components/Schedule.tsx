import Image from "next/image";
import BookingLink from "@/components/BookingLink";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import { booking, schedule } from "@/content/site";

export default function Schedule() {
  return (
    <section id="book" className="relative isolate">
      <Image
        src={schedule.background.src}
        alt={schedule.background.alt}
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />
      {/* The mockup blurs the florals right down behind the calendar. */}
      <div className="absolute inset-0 -z-10 bg-pink/25 backdrop-blur-lg" />

      <div className="mx-auto max-w-[920px] px-4 py-14 md:px-8 md:py-20">
        <h2 className="sr-only">{schedule.heading}</h2>

        <div className="bg-white">
          {/* Empty dark cap on the card, as drawn in the mockup. */}
          <div className="h-14 bg-charcoal" />

          {booking.calendlyUrl ? (
            <CalendlyEmbed className="min-h-[42rem] w-full" />
          ) : (
            <div className="px-6 py-16 text-center">
              <p className="font-serif text-xl text-foreground sm:text-2xl">
                {schedule.prompt}
              </p>
              <BookingLink className="mt-8 inline-block border border-foreground/70 px-9 py-4 text-[11px] font-semibold tracking-[0.12em] text-foreground uppercase transition-colors hover:bg-foreground hover:text-cream">
                {schedule.cta}
              </BookingLink>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
