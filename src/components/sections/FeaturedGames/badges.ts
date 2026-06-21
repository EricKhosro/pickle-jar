import { BadgeItem } from "../types";

const SIDE = "clamp(40px, calc(37.5vw - 500px), 200px)";

export const BADGES: BadgeItem[] = [
  {
    text: "Use hints when you're stuck",
    variant: "icon",
    accent: "surfaceRaised",
    icon: "/assets/icons/lamp.svg",
    top: "4%",
    right: SIDE,
  },
  {
    text: "Play unique and challenging puzzles",
    variant: "chat",
    accent: "surfaceRaised",
    tail: "right",
    top: "46%",
    left: SIDE,
  },
  {
    text: "Play unique and challenging puzzles",
    variant: "chat",
    accent: "primary",
    tail: "left",
    top: "34%",
    right: SIDE,
  },
  {
    text: "Play at your own pace",
    variant: "icon",
    accent: "primary",
    icon: "/assets/icons/controller.svg",
    bottom: "4%",
    left: SIDE,
  },
];
