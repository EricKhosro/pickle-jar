"use client";

import { useCallback, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { GAMES } from "./games";
import { BADGES } from "./badges";
import {
  Stage,
  PhoneArea,
  Badge,
  Phone,
  Screen,
  Track,
  Slide,
  SlideIcon,
  SlideName,
  SlideTag,
  Controls,
  Arrow,
  Dots,
  Dot,
  DetailsButton,
} from "./GameSlider.styles";

type GameSliderProps = {
  onOpen: (index: number) => void;
  className?: string;
};

export default function GameSlider({ onOpen, className }: GameSliderProps) {
  const [index, setIndex] = useState(0);
  const count = GAMES.length;
  const startX = useRef<number | null>(null);
  const dragged = useRef(false);

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count],
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      go(1);
    }
  };

  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    dragged.current = false;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 40) {
      dragged.current = true;
      go(dx < 0 ? 1 : -1);
    }
    startX.current = null;
  };

  const onPhoneClick = () => {
    if (dragged.current) {
      dragged.current = false;
      return;
    }
    onOpen(index);
  };

  return (
    <Stage className={className}>
      <PhoneArea>
        {BADGES.map((badge, i) => (
          <Badge
            key={i}
            aria-hidden="true"
            $accent={badge.accent}
            $top={badge.top}
            $left={badge.left}
            $right={badge.right}
            $bottom={badge.bottom}
          >
            <Icon $src={badge.icon} $size="20px" />
            {badge.text}
          </Badge>
        ))}

        <Phone
          role="group"
          aria-roledescription="carousel"
          aria-label="Featured games — press arrow keys to browse, click for details"
          tabIndex={0}
          onKeyDown={onKeyDown}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onClick={onPhoneClick}
        >
          <Screen>
            <Track $index={index}>
              {GAMES.map((game, i) => (
                <Slide
                  key={game.id}
                  $accent={game.accent}
                  aria-hidden={i !== index}
                >
                  <SlideIcon>
                    <Icon $src={game.icon} $size="40px" />
                  </SlideIcon>
                  <SlideName>{game.name}</SlideName>
                  <SlideTag>{game.tagline}</SlideTag>
                </Slide>
              ))}
            </Track>
          </Screen>
        </Phone>
      </PhoneArea>

      <Controls>
        <Arrow type="button" onClick={() => go(-1)} aria-label="Previous game">
          ‹
        </Arrow>

        <Dots role="tablist" aria-label="Choose a game">
          {GAMES.map((game, i) => (
            <Dot
              key={game.id}
              type="button"
              role="tab"
              $active={i === index}
              aria-selected={i === index}
              aria-label={game.name}
              onClick={() => setIndex(i)}
            />
          ))}
        </Dots>

        <Arrow type="button" onClick={() => go(1)} aria-label="Next game">
          ›
        </Arrow>
      </Controls>

      <DetailsButton type="button" onClick={() => onOpen(index)}>
        Game details
      </DetailsButton>
    </Stage>
  );
}
