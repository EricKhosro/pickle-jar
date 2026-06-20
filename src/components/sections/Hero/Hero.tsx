"use client";

import { StoreBadge } from "@/components/ui/StoreBadge";
import {
  Section,
  Content,
  Heading,
  BottomBar,
  Actions,
  ExploreMore,
} from "./Hero.styles";
import { DecorLayer, Pickle, JarWrap, Jar } from "../common.styles";
import useJarPickles from "@/hooks/useJarPickles";

const PICKLES = [
  { top: "90%", left: "10%", w: 250, rotate: 210, speed: -22 },
  { top: "20%", left: "1%", w: 190, rotate: 20, speed: 30 },
  { top: "10%", left: "90%", w: 320, rotate: 185, speed: -36 },
  { top: "48%", left: "15%", w: 300, rotate: 95, speed: 46 },
  { top: "70%", left: "75%", w: 210, rotate: 220, speed: -26 },
  { top: "3%", left: "20%", w: 100, rotate: 280, speed: 20 },
  { top: "31.8%", left: "77%", w: 175, rotate: -45, speed: 24 },
  { top: "-8%", left: "53%", w: 200, rotate: 20, speed: -22 },
] as const;

export default function Hero() {
  const scope = useJarPickles({
    intro: (tl) => {
      tl.from(".hero-line", {
        yPercent: 110,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
      }).from(
        ".hero-fade",
        { y: 24, opacity: 0, duration: 0.7, stagger: 0.1 },
        "-=0.4",
      );
    },
  });

  return (
    <Section data-gsap-hiddenfi ref={scope} id="home">
      <DecorLayer>
        {PICKLES.map((p, i) => (
          <Pickle
            data-gsap-hidden
            key={i}
            className="pickle"
            aria-hidden="true"
            data-rotate={p.rotate}
            data-speed={p.speed}
            $top={p.top}
            $left={p.left}
            $w={p.w}
            $color="surfaceRaised"
          />
        ))}
        <JarWrap className="jar" aria-hidden="true" $left="50%" $top="78%">
          <Jar />
        </JarWrap>
      </DecorLayer>

      <Content>
        <Heading>
          <span className="hero-line">Redefine</span>
          <span className="hero-line">Mobile Gaming</span>
          <span className="hero-line">Industry</span>
        </Heading>
      </Content>

      <BottomBar>
        <Actions className="hero-fade">
          <StoreBadge store="android" />
          <StoreBadge store="ios" />
        </Actions>
        <ExploreMore className="hero-fade" href="#about">
          Explore more
        </ExploreMore>
      </BottomBar>
    </Section>
  );
}
