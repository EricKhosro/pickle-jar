import styled, { DefaultTheme } from "styled-components";
import { Icon } from "@/components/ui/Icon";
import {
  Section as SectionBase,
  CenteredColumn,
  Heading as HeadingBase,
} from "../common.styles";

type Accent = "surfaceRaised" | "surface" | "primary";

const starColor = (theme: DefaultTheme, accent: Accent) => {
  if (accent === "primary") return theme.colors.surfaceRaised;
  if (accent === "surface") return theme.colors.primary;
  return theme.colors.backgroundDeep;
};

export const Section = styled(SectionBase).attrs({
  $bg: "background",
  $padBlock: "clamp(80px, 12vw, 160px)",
  $padInline: "clamp(20px, 5vw, 80px)",
})``;

export const Inner = CenteredColumn;

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
  line-height: 1.1;

  b {
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.colors.primary};
  }

  span {
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Heading = styled(HeadingBase).attrs({
  $size: "clamp(40px, 8vw, 104px)",
})`
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

export const Marquee = styled.div`
  position: relative;
  left: 50%;
  width: 100vw;
  margin-left: -50vw;
  margin-top: ${({ theme }) => theme.spacing["3xl"]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  -webkit-mask: linear-gradient(
    90deg,
    transparent,
    #000 8%,
    #000 92%,
    transparent
  );
  mask: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
`;

export const Row = styled.div`
  overflow: hidden;
`;

export const Track = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  width: max-content;
  padding-block: 14px;
  will-change: transform;
`;

export const Card = styled.article<{ $accent: Accent }>`
  flex: 0 0 clamp(280px, 26vw, 340px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: clamp(28px, 2.4vw, 40px);
  border-radius: ${({ theme }) => theme.radii.xl};
  text-align: center;
  background: ${({ theme, $accent }) => theme.colors[$accent]};
  color: ${({ theme }) => theme.colors.text};
`;

export const Stars = styled.div`
  display: flex;
  gap: 6px;
`;

export const Star = styled(Icon)<{ $on: boolean; $accent: Accent }>`
  color: ${({ theme, $on, $accent }) =>
    $on ? starColor(theme, $accent) : theme.colors.text};
`;

export const Name = styled.h3`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

export const Quote = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  max-width: 28ch;
`;
