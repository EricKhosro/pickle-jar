"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import VideoEmbed from "@/components/ui/VideoEmbed";
import { useLenis } from "@/components/providers/SmoothScroll";
import { Game } from "../types";
import {
  Overlay,
  Dialog,
  Close,
  ModalTitle,
  ModalTag,
  ModalDesc,
  Stats,
  Stat,
  ScreenshotsBlock,
  SectionLabel,
  Gallery,
  Shot,
  StoreLinks,
  StoreLink,
  Lightbox,
  LightFigure,
  LightClose,
  LightNav,
} from "./GameModal.styles";

type GameModalProps = {
  game: Game | null;
  onClose: () => void;
};

const STORE_LABELS: { key: "steam" | "appstore" | "playstore"; label: string }[] =
  [
    { key: "steam", label: "Steam" },
    { key: "appstore", label: "App Store" },
    { key: "playstore", label: "Google Play" },
  ];

export default function GameModal({ game, onClose }: GameModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();
  const [viewer, setViewer] = useState<number | null>(null);
  const viewerRef = useRef<number | null>(null);

  useEffect(() => {
    viewerRef.current = viewer;
  }, [viewer]);

  const shots = game?.screenshots ?? [];
  const count = shots.length;

  useEffect(() => {
    if (!game) return;

    const active = document.activeElement;
    const opener = active instanceof HTMLElement ? active : null;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (viewerRef.current !== null) setViewer(null);
        else onClose();
      } else if (viewerRef.current !== null && count > 1) {
        if (e.key === "ArrowRight") {
          setViewer((v) => ((v ?? 0) + 1) % count);
        } else if (e.key === "ArrowLeft") {
          setViewer((v) => ((v ?? 0) - 1 + count) % count);
        }
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    lenis?.stop();
    dialogRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      lenis?.start();
      opener?.focus();
    };
  }, [game, onClose, lenis, count]);

  if (!game) return null;

  return (
    <>
      <Overlay onClick={onClose} role="presentation" data-lenis-prevent>
        <Dialog
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={game.name}
          tabIndex={-1}
          data-lenis-prevent
          onClick={(e) => e.stopPropagation()}
        >
          <Close type="button" onClick={onClose} aria-label="Close details">
            ×
          </Close>

          {game.trailer && <VideoEmbed src={game.trailer} title={game.name} />}

          <ModalTitle>{game.name}</ModalTitle>
          <ModalTag>{game.tagline}</ModalTag>
          <ModalDesc>{game.description}</ModalDesc>

          <Stats>
            {game.stats.map((stat) => (
              <Stat key={stat.label}>
                <b>{stat.value}</b>
                <span>{stat.label}</span>
              </Stat>
            ))}
          </Stats>

          {count > 0 && (
            <ScreenshotsBlock>
              <SectionLabel>Screenshots</SectionLabel>
              <Gallery>
                {shots.map((src, i) => (
                  <Shot
                    key={src}
                    type="button"
                    onClick={() => setViewer(i)}
                    aria-label={`View ${game.name} screenshot ${i + 1}`}
                  >
                    <Image
                      src={src}
                      alt={`${game.name} screenshot ${i + 1}`}
                      fill
                      sizes="130px"
                    />
                  </Shot>
                ))}
              </Gallery>
            </ScreenshotsBlock>
          )}

          {game.links && (
            <StoreLinks>
              {STORE_LABELS.map(({ key, label }) => {
                const href = game.links?.[key];
                if (!href) return null;
                return (
                  <StoreLink
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {label}
                  </StoreLink>
                );
              })}
            </StoreLinks>
          )}
        </Dialog>
      </Overlay>

      {viewer !== null && shots[viewer] && (
        <Lightbox
          onClick={() => setViewer(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${game.name} screenshot ${viewer + 1} of ${count}`}
        >
          <LightClose
            type="button"
            onClick={() => setViewer(null)}
            aria-label="Close screenshot"
          >
            ×
          </LightClose>

          {count > 1 && (
            <LightNav
              $side="left"
              type="button"
              aria-label="Previous screenshot"
              onClick={(e) => {
                e.stopPropagation();
                setViewer((v) => ((v ?? 0) - 1 + count) % count);
              }}
            >
              ‹
            </LightNav>
          )}

          <LightFigure onClick={(e) => e.stopPropagation()}>
            <Image
              src={shots[viewer]}
              alt={`${game.name} screenshot ${viewer + 1}`}
              fill
              sizes="(max-width: 600px) 90vw, 520px"
            />
          </LightFigure>

          {count > 1 && (
            <LightNav
              $side="right"
              type="button"
              aria-label="Next screenshot"
              onClick={(e) => {
                e.stopPropagation();
                setViewer((v) => ((v ?? 0) + 1) % count);
              }}
            >
              ›
            </LightNav>
          )}
        </Lightbox>
      )}
    </>
  );
}
