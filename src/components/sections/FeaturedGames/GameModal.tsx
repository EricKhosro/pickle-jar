"use client";

import { useEffect, useRef } from "react";
import { Icon } from "@/components/ui/Icon";
import { Game } from "../types";
import {
  Overlay,
  Dialog,
  Close,
  ModalIcon,
  ModalTitle,
  ModalTag,
  ModalDesc,
  Stats,
  Stat,
} from "./GameModal.styles";

type GameModalProps = {
  game: Game | null;
  onClose: () => void;
};

export default function GameModal({ game, onClose }: GameModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!game) return;

    const opener = document.activeElement as HTMLElement | null;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      opener?.focus();
    };
  }, [game, onClose]);

  if (!game) return null;

  return (
    <Overlay onClick={onClose} role="presentation">
      <Dialog
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={game.name}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <Close type="button" onClick={onClose} aria-label="Close details">
          ×
        </Close>
        <ModalIcon $accent={game.accent}>
          <Icon $src={game.icon} $size="40px" />
        </ModalIcon>
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
      </Dialog>
    </Overlay>
  );
}
