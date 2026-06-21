import styled, { css, DefaultTheme } from "styled-components";

export const capTrim = css`
  text-box-trim: trim-both;
  text-box-edge: cap alphabetic;
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
