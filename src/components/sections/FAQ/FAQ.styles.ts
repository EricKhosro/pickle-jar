import styled from "styled-components";
import { brand } from "@/styles/theme";
import {
  Section as SectionBase,
  CenteredColumn,
  Heading as HeadingBase,
} from "../common.styles";

type Accent = "indigo" | "orange";

const cardColor = (accent: Accent) =>
  accent === "orange" ? brand.orange : brand.indigo;

const markColor = (accent: Accent) =>
  accent === "orange" ? brand.indigoDarkest : brand.orange;

export const Section = styled(SectionBase).attrs({
  $bg: "surfaceRaised",
  $radius: "56px",
  $padBlock: "clamp(80px, 12vw, 160px)",
  $padInline: "clamp(20px, 5vw, 80px)",
})``;

export const Inner = styled(CenteredColumn).attrs({ $maxWidth: "920px" })``;

export const Heading = styled(HeadingBase).attrs({
  $size: "clamp(40px, 8vw, 96px)",
})``;

export const List = styled.div`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing["2xl"]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const Item = styled.div<{ $accent: Accent }>`
  border-radius: 36px;
  overflow: hidden;
  background: ${({ $accent }) => cardColor($accent)};
`;

export const Trigger = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: clamp(24px, 3.4vw, 40px) clamp(24px, 4vw, 56px);
  text-align: center;
  cursor: pointer;
`;

export const Q = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: clamp(20px, 2.4vw, 30px);
  letter-spacing: 0.5px;
  color: ${brand.white};
`;

export const Mark = styled.span<{ $accent: Accent }>`
  color: ${({ $accent }) => markColor($accent)};
`;

export const AnswerWrap = styled.div`
  height: 0;
  overflow: hidden;
`;

export const Answer = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  text-align: center;
  color: ${brand.white};
  padding: 0 clamp(24px, 5vw, 64px) clamp(28px, 3vw, 38px);
  max-width: 60ch;
  margin-inline: auto;
`;
