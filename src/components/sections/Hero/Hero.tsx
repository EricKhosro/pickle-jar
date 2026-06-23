"use client";

import { useRef } from "react";
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
import { PickleConfig } from "../types";
import usePickles from "@/hooks/usePickles";
import { useLenis } from "@/components/providers/SmoothScroll";

const PICKLES: PickleConfig[] = [
  { top: "90%", left: "10%", w: 250, rotate: 210, speed: -22, hide: true },
  { top: "20%", left: "1%", w: 190, rotate: 20, speed: 30 },
  { top: "10%", left: "90%", w: 320, rotate: 185, speed: -36 },
  { top: "48%", left: "15%", w: 300, rotate: 95, speed: 46 },
  { top: "70%", left: "75%", w: 210, rotate: 220, speed: -26 },
  { top: "3%", left: "20%", w: 100, rotate: 280, speed: 20 },
  { top: "31.8%", left: "77%", w: 175, rotate: -45, speed: 24 },
  { top: "-8%", left: "53%", w: 200, rotate: 20, speed: -22 },
];

export default function Hero() {
  const scope = useRef<HTMLElement>(null);
  const lenis = useLenis();

  const onExplore = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!lenis) return;
    e.preventDefault();
    lenis.scrollTo("#about", {
      duration: 1.4,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });
  };

  usePickles(scope, {
    origin: ".jar",
    reveal: true,
    animateOrigin: true,
  });

  return (
    <Section ref={scope} id="home">
      <DecorLayer>
        {PICKLES.map((p, i) => (
          <Pickle
            $hideOnMobile={p.hide}
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
        <JarWrap
          data-gsap-hidden
          className="jar"
          aria-hidden="true"
          $left="50%"
          $top="78%"
        >
          <Jar />
        </JarWrap>
      </DecorLayer>

      <Content>
        <Heading>
          <span className="line-mask">
            <span className="hero-line">Redefine</span>
          </span>
          <span className="line-mask">
            <span className="hero-line">Mobile Gaming</span>
          </span>
          <span className="line-mask">
            <span className="hero-line">Industry</span>
          </span>
        </Heading>
      </Content>

      <BottomBar>
        <Actions className="hero-fade">
          <StoreBadge store="android" />
          <StoreBadge store="ios" />
        </Actions>
        <ExploreMore className="hero-fade" href="#about" onClick={onExplore}>
          Explore more
        </ExploreMore>
      </BottomBar>
    </Section>
  );
}
