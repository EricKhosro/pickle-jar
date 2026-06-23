import styled from "styled-components";
import { Button } from "@/components/ui/Button";
import {
  Section as SectionBase,
  CenteredContainer,
  Eyebrow as EyebrowBase,
  Heading as HeadingBase,
} from "../common.styles";

export const Eyebrow = styled(EyebrowBase)`
  margin-bottom: 56px;
`;

export const Section = styled(SectionBase).attrs({
  $bg: "surface",
  $radius: "56px",
})`
  padding-bottom: clamp(80px, 12vw, 160px);
`;

export const Intro = styled.div`
  position: relative;
  padding-block: clamp(80px, 12vw, 160px);
`;

export const Inner = styled(CenteredContainer)`
  position: relative;
  z-index: 1;
`;

export const Heading = styled(HeadingBase).attrs({
  $size: "clamp(44px, 9vw, 112px)",
})`
  max-width: 16ch;
`;

export const Cta = styled(Button)`
  margin-top: 86px;
  min-width: 280px;
  letter-spacing: 0;
`;
