"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import GameSlider from "./GameSlider";
import GameModal from "./GameModal";
import { GAMES } from "./games";
import { Section, Inner, Eyebrow, Heading } from "./FeaturedGames.styles";

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

  return (
    <Section id="featured" ref={scope}>
      <Inner>
        <Eyebrow className="fg-reveal">Join us</Eyebrow>
        <Heading className="fg-reveal">Our jar dropping game</Heading>
        <Button
          as="a"
          href="#"
          className="fg-reveal"
          $variant="outline"
          $size="md"
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
