export type InsetProps = {
  $top?: string;
  $left?: string;
  $right?: string;
  $bottom?: string;
};

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

export type GameLinks = {
  steam?: string;
  appstore?: string;
  playstore?: string;
};

export type Game = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  accent: "primary" | "surfaceRaised" | "accent";
  stats: GameStat[];
  cover?: string;
  screenshots?: string[];
  trailer?: string;
  links?: GameLinks;
};

export type Milestone = {
  year: string;
  title: string;
  text: string;
};

export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Testimonial = {
  name: string;
  quote: string;
  rating: number;
  accent: "surfaceRaised" | "surface" | "primary";
  avatar: string;
};

export type BadgeItem = {
  text: string;
  variant: "icon" | "chat";
  accent: "primary" | "surfaceRaised";
  icon?: string;
  tail?: "left" | "right";
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};

export type ShowcasePhoto = {
  src: string;
  alt: string;
  ratio: number;
  maxWidth: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};
