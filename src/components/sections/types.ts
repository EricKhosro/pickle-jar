export type PickleConfig = {
  top: string;
  left: string;
  w: number;
  rotate: number;
  speed: number;
  hide?: boolean;
};

export type ArtPiece = {
  src: string;
  ratio: number;
  top: string;
  left: string;
  w: string;
  color: "surfaceRaised" | "primary" | "surface";
  rotate?: number;
};

export type Feature = {
  title: string;
  aspect: string;
  art: ArtPiece[];
};

export type GameStat = {
  label: string;
  value: string;
};

export type Game = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  accent: "primary" | "surfaceRaised" | "accent";
  stats: GameStat[];
};

export type BadgeItem = {
  text: string;
  icon: string;
  accent: "primary" | "surfaceRaised";
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};
