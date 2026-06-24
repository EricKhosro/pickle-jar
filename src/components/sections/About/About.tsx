"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Section, Intro, Inner, Eyebrow, Heading, Cta } from "./About.styles";
import { DecorLayer, Jar, JarWrap, Pickle } from "../common.styles";
import { PickleConfig } from "../types";
import Pickles from "@/components/ui/Pickles";
import FeatureCards from "./FeatureCards";
import usePickles from "@/hooks/usePickles";

export default function About() {
  const scope = useRef<HTMLElement>(null);

  usePickles(scope, {
    origin: ".jar",
    reveal: true,
    animateOrigin: true,
    delay: 0.3,
    defer: true,
    intro: (tl) => {
      tl.from(".about-reveal", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        clearProps: "transform",
      }).from(
        ".card-reveal",
        {
          y: 60,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          clearProps: "transform",
        },
        "0.3",
      );
    },
  });

  useGSAP(
    () => {
      gsap.from(".about-title", {
        y: 48,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        clearProps: "transform",
        scrollTrigger: { trigger: ".about-title", start: "top 85%", once: true },
      });
    },
    { scope },
  );

  const PICKLES: PickleConfig[] = [
    { top: "35%", left: "15%", w: 300, rotate: 95, speed: 46 },
    { top: "63%", left: "75%", w: 210, rotate: 220, speed: -26, hide: true },
    { top: "5%", left: "80%", w: 150, rotate: -100, speed: 24 },
  ];

  return (
    <Section id="about" ref={scope} data-gsap-hidden>
      <Intro>
        <DecorLayer>
          <JarWrap $left="50%" $top="-22vh" className="jar" aria-hidden="true">
            <Jar $color="primary" />
          </JarWrap>
          <Pickles items={PICKLES} color="primary" />
        </DecorLayer>

        <Inner>
          <Eyebrow className="about-reveal">About us</Eyebrow>
          <Heading className="about-title">
            Discover the world&apos;s largest shared pickles jar
          </Heading>
          <Cta
            className="about-reveal"
            type="button"
            $variant="primary"
            $size="lg"
          >
            Get to know us
          </Cta>
        </Inner>
      </Intro>

      <FeatureCards />

      <Pickle
        className="seam-pickle"
        data-speed={-22}
        aria-hidden="true"
        $top="-10vh"
        $left="10%"
        $w={250}
        $rotate={210}
        $color="primary"
        $hideOnMobile
      />

      <Pickle
        className="seam-pickle"
        data-speed={20}
        aria-hidden="true"
        $top="calc(100% - 140px)"
        $left="62%"
        $w={200}
        $rotate={-35}
        $color="primary"
        $hideOnMobile
      />
    </Section>
  );
}
