import styled from "styled-components";
import { Button } from "@/components/ui/Button";
import {
  Section as SectionBase,
  CenteredContainer,
  Eyebrow as EyebrowBase,
  Heading as HeadingBase,
} from "../common.styles";

export const DiscordButton = styled(Button).attrs({
  $variant: "outline",
  $size: "lg",
})`
  width: 233px;
  height: 70px;
`;

export const Section = styled(SectionBase).attrs({ $bg: "background" })`
  padding-block: clamp(80px, 12vw, 160px);
`;

export const Inner = styled(CenteredContainer)`
  position: relative;
  z-index: 1;
`;

export const Eyebrow = styled(EyebrowBase).attrs({ $lineHeight: 1 })``;

export const Heading = styled(HeadingBase).attrs({
  $color: "primary",
  $size: "clamp(44px, 9vw, 112px)",
  $lineHeight: 0.9,
})`
  max-width: 12ch;
  margin-block: 56px;
`;
