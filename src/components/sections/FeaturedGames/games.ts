import { Game } from "../types";

export const GAMES: Game[] = [
  {
    id: "puzzle",
    name: "Puzzle Mode",
    tagline: "Play unique and challenging puzzles",
    description:
      "Hand-crafted jar layouts that get trickier as you climb. Match, drop, and clear pickles before the jar overflows — every level is a fresh brain-teaser.",
    icon: "/assets/icons/controller.svg",
    accent: "primary",
    stats: [
      { label: "Levels", value: "120+" },
      { label: "Difficulty", value: "Hard" },
    ],
  },
  {
    id: "hints",
    name: "Hint Mode",
    tagline: "Use hints when you're stuck",
    description:
      "Never hit a dead end. Smart hints highlight your next best move so you can learn the patterns and keep the streak alive.",
    icon: "/assets/icons/lamp.svg",
    accent: "surfaceRaised",
    stats: [
      { label: "Hints", value: "Unlimited" },
      { label: "Difficulty", value: "Medium" },
    ],
  },
  {
    id: "casual",
    name: "Casual Mode",
    tagline: "Play at your own pace",
    description:
      "No timers, no pressure. Relax with endless jars and chill background tracks — perfect for a calm five minutes or a long session.",
    icon: "/assets/icons/star.svg",
    accent: "accent",
    stats: [
      { label: "Timer", value: "Off" },
      { label: "Difficulty", value: "Easy" },
    ],
  },
];
