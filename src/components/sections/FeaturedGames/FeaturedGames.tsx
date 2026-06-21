"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import GameSlider from "./GameSlider";
import GameModal from "./GameModal";
import { GAMES } from "./games";
import { DecorLayer, Pickle } from "../common.styles";
import { PickleConfig } from "../types";
import usePickles from "@/hooks/usePickles";
import { Section, Inner, Eyebrow, Heading } from "./FeaturedGames.styles";

const PICKLES: PickleConfig[] = [
  { top: "14%", left: "7%", w: 150, rotate: -25, speed: 34, hide: true },
  { top: "72%", left: "13%", w: 110, rotate: 70, speed: -26 },
  { top: "24%", left: "86%", w: 170, rotate: 200, speed: 40, hide: true },
  { top: "80%", left: "65%", w: 120, rotate: -5, speed: -20 },
];

export default function FeaturedGames() {
  const scope = useRef<HTMLElement>(null);
  const [selected, setSelected] = useState<number | null>(null);

  useGSAP(
    () => {
      gsap.from(".fg-reveal", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        clearProps: "transform",
        scrollTrigger: { trigger: scope.current, start: "top 75%", once: true },
      });
    },
    { scope },
  );

  usePickles(scope, {
    origin: '[aria-roledescription="carousel"]',
    reveal: true,
  });

  return (
    <Section id="featured" ref={scope} data-gsap-hidden>
      <DecorLayer>
        {PICKLES.map((p, i) => (
          <Pickle
            key={i}
            className="pickle"
            data-gsap-hidden
            aria-hidden="true"
            data-rotate={p.rotate}
            data-speed={p.speed}
            $top={p.top}
            $left={p.left}
            $w={p.w}
            $color="surfaceRaised"
            $hideOnMobile={p.hide}
          />
        ))}
        <Pickle
          className="seam-pickle"
          data-speed={20}
          aria-hidden="true"
          $top="-140px"
          $left="62%"
          $w={200}
          $rotate={-35}
          $color="surfaceRaised"
        />
      </DecorLayer>

      <Inner>
        <Eyebrow className="fg-reveal">Join us</Eyebrow>
        <Heading className="fg-reveal">Our jar dropping game</Heading>
        <Button
          as="a"
          href="#"
          className="fg-reveal"
          $variant="outline"
          $size="lg"
          aria-label="Join our Discord"
        >
          <Icon $src="/assets/icons/discord.svg" $size="20px" />
          Discord
        </Button>

        <GameSlider className="fg-reveal" onOpen={setSelected} />
      </Inner>

      <GameModal
        game={selected === null ? null : GAMES[selected]}
        onClose={() => setSelected(null)}
      />
    </Section>
  );
}
