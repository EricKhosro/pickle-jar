"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { MILESTONES } from "./milestones";
import {
  Section,
  Inner,
  Eyebrow,
  Heading,
  Viewport,
  Track,
  Card,
  Year,
  CardTitle,
  Text,
} from "./Timeline.styles";

export default function Timeline() {
  const scope = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(scope.current, { autoAlpha: 1 });

      gsap.from(".tl-reveal", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        clearProps: "transform",
        scrollTrigger: { trigger: scope.current, start: "top 80%", once: true },
      });

      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        const track = trackRef.current;
        if (!track) return;
        const distance = () =>
          track.scrollWidth - (track.parentElement?.clientWidth ?? 0);

        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: scope.current,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      });
    },
    { scope },
  );

  return (
    <Section ref={scope} id="journey" data-gsap-hidden>
      <Inner>
        <Eyebrow className="tl-reveal">How it started</Eyebrow>
        <Heading className="tl-reveal">Our Journey</Heading>
      </Inner>
      <Viewport>
        <Track ref={trackRef}>
          {MILESTONES.map((m) => (
            <Card key={m.year}>
              <Year>{m.year}</Year>
              <CardTitle>{m.title}</CardTitle>
              <Text>{m.text}</Text>
            </Card>
          ))}
        </Track>
      </Viewport>
    </Section>
  );
}
