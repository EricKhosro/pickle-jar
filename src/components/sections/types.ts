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
