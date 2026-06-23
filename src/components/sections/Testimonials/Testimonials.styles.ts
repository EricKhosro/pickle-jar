import styled, { DefaultTheme } from "styled-components";
import { Icon } from "@/components/ui/Icon";
import {
  RoundedSection,
  CenteredColumn,
  Heading as HeadingBase,
  capTrim,
} from "../common.styles";

type Accent = "surfaceRaised" | "card" | "primary";

const starOn = (theme: DefaultTheme, accent: Accent) =>
  accent === "card" ? theme.colors.primary : theme.colors.text;

const starOff = (theme: DefaultTheme, accent: Accent) =>
  accent === "card" ? theme.colors.text : theme.colors.backgroundDeep;

export const Section = styled(RoundedSection).attrs({
  $bg: "surface",
  $padBlock: "clamp(80px, 12vw, 160px)",
  $padInline: "clamp(20px, 2.5vw, 48px)",
})``;

export const Inner = styled(CenteredColumn)`
  position: relative;
  z-index: 1;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Avatars = styled.div`
  display: flex;

  & > * + * {
    margin-left: -18px;
  }
`;

export const Avatar = styled.span`
  position: relative;
  width: 52px;
  height: 52px;
  border-radius: ${({ theme }) => theme.radii.round};
  overflow: hidden;
  border: 3px solid ${({ theme }) => theme.colors.background};

  & img {
    object-fit: cover;
  }
`;

export const ActivePlayers = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  line-height: 1.5;

  b {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-size: clamp(28px, 3.5vw, 40px);
    color: ${({ theme }) => theme.colors.primary};
    ${capTrim}
  }

  span {
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.text};
    ${capTrim}
  }
`;

export const Heading = styled(HeadingBase).attrs({
  $size: "clamp(44px, 9vw, 112px)",
  $lineHeight: 0.9,
})`
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

export const Collage = styled.div`
  width: 100%;
  max-width: 1834px;
  margin: ${({ theme }) => theme.spacing["3xl"]} auto 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(20px, 3vw, 36px);

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.media.desktop} {
    grid-template-columns: repeat(3, 1fr);
    column-gap: clamp(4px, 0.8vw, 14px);
    row-gap: clamp(8px, 1.4vw, 24px);
    align-items: center;
  }
`;

export const Card = styled.article<{
  $accent: Accent;
  $tilt: number;
  $shift: number;
  $z: number;
}>`
  position: relative;
  z-index: ${({ $z }) => $z};
  width: 100%;
  max-width: 602px;
  min-width: 0;
  margin-inline: auto;
  aspect-ratio: 602 / 432;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: clamp(20px, 2.8vw, 40px);
  padding: clamp(40px, 5.5vw, 80px) clamp(20px, 2.4vw, 37px);
  border-radius: 40px;
  text-align: center;
  background: ${({ theme, $accent }) => theme.colors[$accent]};
  color: ${({ theme, $accent }) =>
    $accent === "primary" ? theme.colors.onPrimary : theme.colors.text};
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  ${({ theme }) => theme.media.desktop} {
    transform: rotate(${({ $tilt }) => $tilt}deg)
      translateY(${({ $shift }) => $shift}px);

    &:hover {
      z-index: 30;
      transform: translateY(-10px) scale(1.04);
    }
  }

  ${({ theme }) => theme.media.reducedMotion} {
    transition: none;
  }
`;

export const Stars = styled.div`
  display: flex;
  justify-content: center;
  gap: clamp(4px, 1.2vw, 6px);
  max-width: 100%;
`;

export const Star = styled(Icon)<{ $on: boolean; $accent: Accent }>`
  flex-shrink: 1;
  min-width: 0;
  height: auto;
  aspect-ratio: 1;
  color: ${({ theme, $on, $accent }) =>
    $on ? starOn(theme, $accent) : starOff(theme, $accent)};
`;

export const Name = styled.h3`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: clamp(24px, 2.4vw, 32px);
  line-height: 1.2;
  letter-spacing: 1.5px;
`;

export const Quote = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: clamp(18px, 1.8vw, 24px);
  line-height: 1.6;
  letter-spacing: 1.5px;
  max-width: 28ch;
`;
