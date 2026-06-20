"use client";

import { Section, Intro, Inner, Eyebrow, Heading, Cta } from "./About.styles";
import { DecorLayer, Jar, JarWrap, Pickle } from "../common.styles";
import FeatureCards from "./FeatureCards";
import useJarPickles from "@/hooks/useJarPickles";

export default function About() {
  const scope = useJarPickles({
    delay: 0.3,
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

  const PICKLES = [
    { top: "-15%", left: "10%", w: 250, rotate: 210, speed: -22 },
    { top: "45%", left: "15%", w: 300, rotate: 95, speed: 46 },
    { top: "63%", left: "75%", w: 210, rotate: 220, speed: -26 },
    { top: "15%", left: "70%", w: 150, rotate: -100, speed: 24 },
  ] as const;

  return (
    <Section id="about" ref={scope} data-gsap-hidden>
      <Intro>
        <DecorLayer>
          <JarWrap $left="50%" $top="-33.5%" className="jar" aria-hidden="true">
            <Jar $color="primary" />
          </JarWrap>
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
              $color="primary"
            />
          ))}
        </DecorLayer>

        <Inner>
          <Eyebrow className="about-reveal">About us</Eyebrow>
          <Heading className="about-reveal">
            Discover the world&apos;s largest shared pickles jar
          </Heading>
          <Cta className="about-reveal" type="button" $variant="primary">
            Get to know us
          </Cta>
        </Inner>
      </Intro>

      <FeatureCards />
    </Section>
  );
}
