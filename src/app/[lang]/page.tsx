import { notFound } from "next/navigation";
import Marquee from "@/components/Marquee";
import Masthead from "@/components/Masthead";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Workshops from "@/components/Workshops";
import FloralBand from "@/components/FloralBand";
import HowItWorks from "@/components/HowItWorks";
import EventsWeDo from "@/components/EventsWeDo";
import Personalised from "@/components/Personalised";
import PlanExperience from "@/components/PlanExperience";
import Footer from "@/components/Footer";
import { getContent, isLocale } from "@/content";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  // One object with every word and photo on the page, in this language.
  const content = getContent(lang);

  return (
    <>
      <header>
        <Marquee copy={content.marquee} />
        <Masthead brand={content.brand} copy={content.masthead} />
        <NavBar
          a11y={content.a11y}
          copy={content.nav}
          languages={content.languages}
        />
      </header>
      <main className="flex-1">
        <Hero copy={content.hero} />
        <About copy={content.about} />
        <Workshops copy={content.workshops} />
        <FloralBand photo={content.band} />
        <HowItWorks copy={content.howItWorks} />
        <EventsWeDo copy={content.eventsWeDo} />
        <Personalised copy={content.personalised} />
        <FloralBand photo={content.band} />
        <PlanExperience copy={content.plan} />
      </main>
      <Footer
        brand={content.brand}
        contact={content.contact}
        copy={content.footer}
        nav={content.nav}
      />
    </>
  );
}
