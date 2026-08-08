import Marquee from "@/components/Marquee";
import Masthead from "@/components/Masthead";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Workshops from "@/components/Workshops";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
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
        <Events />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
