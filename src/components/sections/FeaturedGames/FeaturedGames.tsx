"use client";

import { useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import GameSlider from "./GameSlider";
import GameModal from "./GameModal";
import { GAMES } from "./games";
import { DecorLayer, Pickle } from "../common.styles";
import { PickleConfig } from "../types";
import Pickles from "@/components/ui/Pickles";
import usePickles from "@/hooks/usePickles";
import useReveal from "@/hooks/useReveal";
import {
  Section,
  Inner,
  Eyebrow,
  Heading,
  DiscordButton,
} from "./FeaturedGames.styles";

const PICKLES: PickleConfig[] = [
  { top: "14%", left: "7%", w: 150, rotate: -25, speed: 34, hide: true },
  { top: "72%", left: "13%", w: 110, rotate: 70, speed: -26 },
  { top: "24%", left: "86%", w: 170, rotate: 200, speed: 40, hide: true },
  { top: "80%", left: "65%", w: 120, rotate: -5, speed: -20 },
  { top: "8%", left: "44%", w: 90, rotate: 120, speed: 26, hide: true },
  { top: "44%", left: "3%", w: 130, rotate: -60, speed: -30 },
  { top: "52%", left: "93%", w: 140, rotate: 35, speed: 24, hide: true },
  { top: "80%", left: "34%", w: 100, rotate: 160, speed: -22, hide: true },
];

export default function FeaturedGames() {
  const scope = useRef<HTMLElement>(null);
  const [selected, setSelected] = useState<number | null>(null);

  useReveal(scope, ".fg-reveal");
  usePickles(scope, {
    origin: '[aria-roledescription="carousel"]',
    reveal: true,
  });

  return (
    <Section id="featured" ref={scope} data-gsap-hidden>
      <DecorLayer>
        <Pickles items={PICKLES} color="surfaceRaised" />
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
        <DiscordButton
          as="a"
          href="https://discord.gg/bvgWmyPX"
          target="_blank"
          rel="noopener noreferrer"
          className="fg-reveal"
          aria-label="Join our Discord"
        >
          <Icon $src="/assets/icons/discord.svg" $size="20px" />
          Discord
        </DiscordButton>

        <GameSlider className="fg-reveal" onOpen={setSelected} />
      </Inner>

      <GameModal
        game={selected === null ? null : GAMES[selected]}
        onClose={() => setSelected(null)}
      />
    </Section>
  );
}
