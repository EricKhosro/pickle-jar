import styled from "styled-components";
import {
  Section as SectionBase,
  CenteredColumn,
  Heading as HeadingBase,
} from "../common.styles";

type Accent = "surfaceRaised" | "surface";

export const Section = styled(SectionBase).attrs({
  $bg: "background",
  $padBlock: "clamp(80px, 12vw, 160px)",
  $padInline: "clamp(20px, 5vw, 80px)",
})``;

export const Inner = styled(CenteredColumn).attrs({ $maxWidth: "920px" })`
  position: relative;
  z-index: 1;
`;

export const Heading = styled(HeadingBase).attrs({
  $size: "clamp(40px, 8vw, 96px)",
  $color: "primary",
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
  background: ${({ theme, $accent }) => theme.colors[$accent]};
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
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: clamp(28px, 4vw, 40px);
  line-height: 1.2;
  letter-spacing: 1.5px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

export const Mark = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const AnswerWrap = styled.div`
  height: 0;
  overflow: hidden;
`;

export const Answer = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: clamp(20px, 2.6vw, 28px);
  line-height: 1.6;
  letter-spacing: 1.5px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  padding: 0 clamp(24px, 5vw, 64px) clamp(28px, 3vw, 38px);
  max-width: 60ch;
  margin-inline: auto;
`;
