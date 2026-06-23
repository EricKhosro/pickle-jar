"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import useReveal from "@/hooks/useReveal";
import { TESTIMONIALS } from "./reviews";
import { Testimonial } from "../types";
import {
  Section,
  Inner,
  Top,
  Avatars,
  Avatar,
  ActivePlayers,
  Heading,
  Marquee,
  Row,
  Track,
  Card,
  Stars,
  Star,
  Name,
  Quote,
} from "./Testimonials.styles";

function MarqueeRow({ items, dir }: { items: Testimonial[]; dir: 1 | -1 }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const tween = useRef<gsap.core.Tween | null>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.set(trackRef.current, { xPercent: dir === 1 ? -50 : 0 });
      tween.current = gsap.to(trackRef.current, {
        xPercent: dir === 1 ? 0 : -50,
        duration: 48,
        ease: "none",
        repeat: -1,
      });
    },
    { scope: trackRef },
  );

  const doubled = [...items, ...items];

  return (
    <Row
      onMouseEnter={() => tween.current?.pause()}
      onMouseLeave={() => tween.current?.resume()}
    >
      <Track ref={trackRef}>
        {doubled.map((t, i) => (
          <Card key={`${t.name}-${i}`} $accent={t.accent}>
            <Stars aria-label={`${t.rating} out of 5 stars`}>
              {Array.from({ length: 5 }, (_, s) => (
                <Star
                  key={s}
                  aria-hidden="true"
                  $src="/assets/icons/star.svg"
                  $size="22px"
                  $on={s < t.rating}
                  $accent={t.accent}
                />
              ))}
            </Stars>
            <Name>{t.name}</Name>
            <Quote>{t.quote}</Quote>
          </Card>
        ))}
      </Track>
    </Row>
  );
}

export default function Testimonials() {
  const scope = useRef<HTMLElement>(null);
  const countRef = useRef<HTMLElement>(null);

  useReveal(scope, ".t-reveal");

  useGSAP(
    () => {
      const counter = { value: 0 };
      gsap.to(counter, {
        value: 200,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: { trigger: scope.current, start: "top 70%", once: true },
        onUpdate: () => {
          if (countRef.current) {
            countRef.current.textContent = `+${Math.round(counter.value)}`;
          }
        },
      });
    },
    { scope },
  );

  return (
    <Section id="testimonials" ref={scope} data-gsap-hidden>
      <Inner>
        <Top className="t-reveal">
          <Avatars>
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <Avatar key={t.name}>
                <Image src={t.avatar} alt="" fill sizes="52px" />
              </Avatar>
            ))}
          </Avatars>
          <ActivePlayers>
            <b ref={countRef}>+200</b>
            <span>Active players</span>
          </ActivePlayers>
        </Top>

        <Heading className="t-reveal">Player Testimonials</Heading>
      </Inner>

      <Marquee className="t-reveal">
        <MarqueeRow items={TESTIMONIALS} dir={-1} />
        <MarqueeRow items={[...TESTIMONIALS].reverse()} dir={1} />
      </Marquee>
    </Section>
  );
}
