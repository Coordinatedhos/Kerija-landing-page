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

export default function Home() {
  return (
    <>
      <header>
        <Marquee />
        <Masthead />
        <NavBar />
      </header>
      <main className="flex-1">
        <Hero />
        <About />
        <Workshops />
        <FloralBand />
        <HowItWorks />
        <EventsWeDo />
        <Personalised />
        <FloralBand />
        <PlanExperience />
      </main>
      <Footer />
    </>
  );
}
