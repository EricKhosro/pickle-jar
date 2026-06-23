import styled, { css, DefaultTheme } from "styled-components";
import { Container } from "@/components/ui/Container";

type ColorKey = keyof DefaultTheme["colors"];

export const capTrim = css`
  text-box-trim: trim-both;
  text-box-edge: cap alphabetic;
`;

export const Section = styled.section<{
  $bg?: ColorKey;
  $radius?: string;
  $padBlock?: string;
  $padInline?: string;
}>`
  position: relative;
  overflow: hidden;
  ${({ theme, $bg }) =>
    $bg &&
    css`
      background: ${theme.colors[$bg]};
    `}
  ${({ $radius }) =>
    $radius &&
    css`
      border-radius: ${$radius};
    `}
  ${({ $padBlock }) =>
    $padBlock &&
    css`
      padding-block: ${$padBlock};
    `}
  ${({ $padInline }) =>
    $padInline &&
    css`
      padding-inline: ${$padInline};
    `}
`;

export const RoundedSection = styled(Section).attrs({ $radius: "56px" })``;

export const CenteredContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const CenteredColumn = styled.div<{ $maxWidth?: string }>`
  max-width: ${({ $maxWidth, theme }) => $maxWidth ?? theme.container.maxWidth};
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Eyebrow = styled.p<{ $lineHeight?: number }>`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: clamp(28px, 3.5vw, 40px);
  line-height: ${({ $lineHeight }) => $lineHeight ?? 1.2};
  letter-spacing: -0.73px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  ${capTrim}
`;

export const Heading = styled.h2<{
  $color?: ColorKey;
  $size?: string;
  $align?: "left" | "center";
  $lineHeight?: number;
}>`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeights.black};
  text-transform: uppercase;
  line-height: ${({ $lineHeight }) => $lineHeight ?? 0.95};
  letter-spacing: 2px;
  text-align: ${({ $align }) => $align ?? "center"};
  color: ${({ theme, $color }) => theme.colors[$color ?? "text"]};
  font-size: ${({ $size }) => $size ?? "clamp(40px, 8vw, 104px)"};
  ${capTrim}
`;

export const PICKLE_RATIO = 164 / 106;

export const pw = (w: number) =>
  `clamp(${Math.round(w * 0.42)}px, ${(w / 19.2).toFixed(1)}vw, ${w}px)`;

export const DecorLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
`;

export const Pickle = styled.span<{
  $top: string;
  $left: string;
  $w: number;
  $color?: keyof DefaultTheme["colors"];
  $hideOnMobile?: boolean;
  $rotate?: number;
}>`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  width: ${({ $w }) => pw($w)};
  height: ${({ $w }) => `calc(${pw($w)} * ${PICKLE_RATIO})`};
  transform: rotate(${({ $rotate }) => $rotate ?? 0}deg);
  will-change: transform;
  -webkit-mask: url("/assets/illustrations/pickle.svg") no-repeat center /
    contain;
  mask: url("/assets/illustrations/pickle.svg") no-repeat center / contain;
  background-color: ${({ theme, $color }) =>
    $color ? theme.colors[$color] : theme.colors.surfaceRaised};
  ${({ $hideOnMobile, theme }) =>
    $hideOnMobile &&
    css`
      ${theme.media.belowTablet} {
        display: none;
      }
    `}
`;

export const HalfPickle = styled.span<{
  $left: string;
  $w: number;
  $edge: "top" | "bottom";
  $color?: keyof DefaultTheme["colors"];
  $rotate?: number;
  $hideOnMobile?: boolean;
}>`
  position: absolute;
  left: ${({ $left }) => $left};
  width: ${({ $w }) => `${$w}px`};
  height: ${({ $w }) => `${$w * PICKLE_RATIO}px`};
  ${({ $edge, $w }) =>
    $edge === "bottom"
      ? css`
          top: calc(100% - ${($w * PICKLE_RATIO) / 2}px);
        `
      : css`
          top: ${(-$w * PICKLE_RATIO) / 2}px;
        `}
  transform: rotate(${({ $rotate }) => $rotate ?? 0}deg);
  -webkit-mask: url("/assets/illustrations/pickle.svg") no-repeat center /
    contain;
  mask: url("/assets/illustrations/pickle.svg") no-repeat center / contain;
  background-color: ${({ theme, $color }) => theme.colors[$color ?? "primary"]};
  ${({ $hideOnMobile, theme }) =>
    $hideOnMobile &&
    css`
      ${theme.media.belowTablet} {
        display: none;
      }
    `}
`;

export const JarWrap = styled.span<{ $top: string; $left: string }>`
  position: absolute;
  left: ${({ $left }) => $left};
  top: ${({ $top }) => $top};
  width: clamp(280px, 37vw, 701px);
  aspect-ratio: 702 / 790;
  will-change: transform;
`;

export const Jar = styled.span<{ $color?: keyof DefaultTheme["colors"] }>`
  display: block;
  width: 100%;
  height: 100%;
  background-color: ${({ theme, $color }) =>
    $color ? theme.colors[$color] : theme.colors.surfaceRaised};
  -webkit-mask: url("/assets/illustrations/jar.svg") no-repeat center / contain;
  mask: url("/assets/illustrations/jar.svg") no-repeat center / contain;
`;

export const Shape = styled.span<{
  $src: string;
  $top: string;
  $left: string;
  $w: string;
  $ratio: number;
  $color: keyof DefaultTheme["colors"];
  $rotate?: number;
}>`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  width: ${({ $w }) => $w};
  aspect-ratio: ${({ $ratio }) => $ratio};
  transform: rotate(${({ $rotate }) => $rotate ?? 0}deg);
  background-color: ${({ theme, $color }) => theme.colors[$color]};
  -webkit-mask: ${({ $src }) => `url(${$src}) no-repeat center / contain`};
  mask: ${({ $src }) => `url(${$src}) no-repeat center / contain`};
`;
