"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { GAMES } from "./games";
import { BADGES } from "./badges";
import { PHOTOS } from "./photos";
import {
  Stage,
  Showcase,
  PhoneArea,
  PhotoCard,
  PillBadge,
  ChatBubble,
  BadgeIcon,
  BadgeGlyph,
  Phone,
  Screen,
  Track,
  Slide,
  SlideInfo,
  SlideName,
  SlideTag,
  Controls,
  Arrow,
  Dots,
  Dot,
  DetailsButton,
  KeyboardHint,
  Kbd,
} from "./GameSlider.styles";

type GameSliderProps = {
  onOpen: (index: number) => void;
  className?: string;
};

export default function GameSlider({ onOpen, className }: GameSliderProps) {
  const [index, setIndex] = useState(0);
  const [hint, setHint] = useState(false);
  const count = GAMES.length;
  const startX = useRef<number | null>(null);
  const dragged = useRef(false);
  const regionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const inView = useRef(false);
  const hintDone = useRef(false);
  const indexRef = useRef(index);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  const dismissHint = useCallback(() => {
    if (hintDone.current) return;
    hintDone.current = true;
    setHint(false);
  }, []);

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count],
  );

  useGSAP(
    () => {
      gsap.to(trackRef.current, {
        xPercent: -index * 100,
        duration: 0.6,
        ease: "power3.inOut",
      });
    },
    { dependencies: [index] },
  );

  useEffect(() => {
    const el = regionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView.current = entry.isIntersecting;
        if (entry.isIntersecting && !hintDone.current) setHint(true);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!inView.current) return;
      const target = e.target instanceof HTMLElement ? e.target : null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        go(1);
      } else if (e.key === "Enter") {
        const insideSlider =
          target &&
          (target.tagName === "BUTTON" || target.tagName === "A") &&
          regionRef.current?.contains(target);
        if (insideSlider) {
          return;
        }
        e.preventDefault();
        dismissHint();
        onOpen(indexRef.current);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, onOpen, dismissHint]);

  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    dragged.current = false;
    e.currentTarget.setPointerCapture(e.pointerId);
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
    dismissHint();
    onOpen(index);
  };

  return (
    <Stage
      ref={regionRef}
      className={className}
      role="group"
      aria-roledescription="carousel"
      aria-label="Featured games — use arrow keys to browse"
    >
      <Showcase>
        {PHOTOS.map((photo, i) => (
          <PhotoCard
            key={i}
            $ratio={photo.ratio}
            $maxW={photo.maxWidth}
            $top={photo.top}
            $left={photo.left}
            $right={photo.right}
            $bottom={photo.bottom}
          >
            <Image src={photo.src} alt={photo.alt} fill sizes="400px" />
          </PhotoCard>
        ))}

        {BADGES.map((badge, i) =>
          badge.variant === "icon" ? (
            <PillBadge
              key={i}
              aria-hidden="true"
              $accent={badge.accent}
              $top={badge.top}
              $left={badge.left}
              $right={badge.right}
              $bottom={badge.bottom}
            >
              {badge.icon && (
                <BadgeIcon $accent={badge.accent}>
                  <BadgeGlyph $src={badge.icon} />
                </BadgeIcon>
              )}
              <span>{badge.text}</span>
            </PillBadge>
          ) : (
            <ChatBubble
              key={i}
              aria-hidden="true"
              $accent={badge.accent}
              $tail={badge.tail}
              $top={badge.top}
              $left={badge.left}
              $right={badge.right}
              $bottom={badge.bottom}
            >
              <span>{badge.text}</span>
            </ChatBubble>
          ),
        )}

        <PhoneArea>
          <Phone
            aria-label="Open game details"
            tabIndex={0}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onClick={onPhoneClick}
          >
            <Screen>
              <Track ref={trackRef}>
                {GAMES.map((game, i) => (
                  <Slide
                    key={game.id}
                    $accent={game.accent}
                    $active={i === index}
                    aria-hidden={i !== index}
                  >
                    {game.cover && (
                      <Image
                        src={game.cover}
                        alt=""
                        fill
                        className="slide-cover"
                        sizes="480px"
                      />
                    )}
                    <SlideInfo>
                      <SlideName>{game.name}</SlideName>
                      <SlideTag>{game.tagline}</SlideTag>
                    </SlideInfo>
                  </Slide>
                ))}
              </Track>
            </Screen>
          </Phone>
        </PhoneArea>
      </Showcase>

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
      <KeyboardHint $show={hint} aria-hidden="true">
        <Kbd>←</Kbd>
        <Kbd>→</Kbd>
        to browse
        <span>·</span>
        <Kbd>Enter</Kbd>
        for details
      </KeyboardHint>
    </Stage>
  );
}
