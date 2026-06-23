import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import FeaturedGames from "@/components/sections/FeaturedGames";
import Stats from "@/components/sections/Stats";
import Timeline from "@/components/sections/Timeline";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import JsonLd from "@/components/seo/JsonLd";
import { GAMES } from "@/components/sections/FeaturedGames/games";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const gamesLd = {
  "@context": "https://schema.org",
  "@graph": GAMES.map((game) => ({
    "@type": "VideoGame",
    name: game.name,
    description: game.description,
    url: `${SITE_URL}/#featured`,
    publisher: { "@id": `${SITE_URL}/#organization` },
    ...(game.cover ? { image: `${SITE_URL}${game.cover}` } : {}),
    ...(game.links
      ? {
          sameAs: [
            game.links.steam,
            game.links.appstore,
            game.links.playstore,
          ].filter(Boolean),
        }
      : {}),
  })),
};

export default function Home() {
  return (
    <main>
      <JsonLd data={gamesLd} />
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
