import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import FeaturedGames from "@/components/sections/FeaturedGames";
import Stats from "@/components/sections/Stats";
import Timeline from "@/components/sections/Timeline";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <FeaturedGames />
      <Stats />
      <Timeline />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
