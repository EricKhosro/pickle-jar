"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@/lib/gsap";
import useReveal from "@/hooks/useReveal";
import usePickles from "@/hooks/usePickles";
import countUp from "@/lib/countUp";
import Pickles from "@/components/ui/Pickles";
import { DecorLayer, HalfPickle } from "../common.styles";
import { PickleConfig } from "../types";
import { TESTIMONIALS } from "./reviews";
import {
  Section,
  Inner,
  Top,
  Avatars,
  Avatar,
  ActivePlayers,
  Heading,
  Collage,
  Card,
  Stars,
  Star,
  Name,
  Quote,
} from "./Testimonials.styles";

const CARDS = TESTIMONIALS.slice(0, 6);
const TILTS = [-6.76, 2.5, 6.76, 6, -4.5, 5.5];
const SHIFTS = [-10, 28, 6, -14, 14, -6];
const Z = [1, 2, 1, 3, 4, 3];

const PICKLES: PickleConfig[] = [
  { top: "3%", left: "88%", w: 110, rotate: 90, speed: -26, hide: true },
  { top: "18%", left: "0%", w: 200, rotate: 210, speed: -22, hide: true },
];

export default function Testimonials() {
  const scope = useRef<HTMLElement>(null);
  const countRef = useRef<HTMLElement>(null);

  useReveal(scope, ".t-reveal");
  usePickles(scope, { origin: ".t-collage", defer: true });

  useGSAP(
    () => {
      if (!countRef.current) return;
      countUp(countRef.current, 200, {
        trigger: scope.current,
        start: "top 70%",
        duration: 1.8,
        format: (n) => `+${n}`,
      });
    },
    { scope },
  );

  return (
    <Section id="testimonials" ref={scope} data-gsap-hidden>
      <DecorLayer>
        <Pickles items={PICKLES} color="primary" />
        <HalfPickle
          className="seam-pickle"
          aria-hidden="true"
          data-speed={20}
          $edge="bottom"
          $left="64%"
          $w={180}
          $rotate={15}
          $color="primary"
          $hideOnMobile
        />
      </DecorLayer>

      <Inner>
        <Top className="t-reveal">
          <Avatars>
            {CARDS.slice(0, 3).map((t) => (
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

      <Collage className="t-reveal t-collage">
        {CARDS.map((t, i) => (
          <Card
            key={t.name}
            $accent={t.accent}
            $tilt={TILTS[i]}
            $shift={SHIFTS[i]}
            $z={Z[i]}
          >
            <Stars aria-label={`${t.rating} out of 5 stars`}>
              {Array.from({ length: 5 }, (_, s) => (
                <Star
                  key={s}
                  aria-hidden="true"
                  $src="/assets/icons/star.svg"
                  $size="56px"
                  $on={s < t.rating}
                  $accent={t.accent}
                />
              ))}
            </Stars>
            <Name>{t.name}</Name>
            <Quote>{t.quote}</Quote>
          </Card>
        ))}
      </Collage>
    </Section>
  );
}
