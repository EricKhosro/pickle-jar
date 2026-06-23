import styled, { css, DefaultTheme } from "styled-components";
import { InsetProps } from "../types";
import { insetProps } from "@/styles/mixins";

type Accent = "primary" | "surfaceRaised" | "accent";
type BadgeAccent = "primary" | "surfaceRaised";

const badgeRing = (accent: BadgeAccent) =>
  accent === "primary" ? "rgba(38, 40, 114, 0.3)" : "rgba(255, 255, 255, 0.4)";

const bubbleText = css`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 28px;
  line-height: 1.2;
  letter-spacing: 1.5px;
  text-align: left;
`;

export const Stage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing["2xl"]};
`;

export const PhoneArea = styled.div`
  position: relative;
  width: min(860px, calc(100vw - 48px));
  display: flex;
  justify-content: center;
`;

export const PillBadge = styled.span<{ $accent: BadgeAccent } & InsetProps>`
  position: absolute;
  display: none;
  align-items: center;
  gap: 10px;
  width: 460px;
  min-height: 136px;
  padding: 16px 32px 16px 16px;
  border-radius: 120px;
  ${bubbleText}
  background: ${({ theme, $accent }) => theme.colors[$accent]};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0 24px 50px rgba(0, 0, 0, 0.28);
  ${insetProps}

  ${({ theme }) => theme.media.wide} {
    display: inline-flex;
  }
`;

export const ChatBubble = styled.span<
  { $accent: BadgeAccent; $tail?: "left" | "right" } & InsetProps
>`
  position: absolute;
  display: none;
  align-items: center;
  gap: 20px;
  width: 425px;
  height: 100px;
  padding: ${({ $tail }) =>
    $tail === "left" ? "20px 40px 20px 64px" : "20px 64px 20px 40px"};
  ${bubbleText}
  color: ${({ theme }) => theme.colors.text};
  ${insetProps}

  > * {
    position: relative;
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 0;
    background-color: ${({ theme, $accent }) => theme.colors[$accent]};
    -webkit-mask: url(/assets/illustrations/bubble.svg) no-repeat center / 100%
      100%;
    mask: url(/assets/illustrations/bubble.svg) no-repeat center / 100% 100%;
    ${({ $tail }) => ($tail === "left" ? "transform: scaleX(-1);" : "")}
    filter: drop-shadow(0 22px 36px rgba(0, 0, 0, 0.28));
  }

  ${({ theme }) => theme.media.wide} {
    display: inline-flex;
  }
`;

export const BadgeIcon = styled.span<{ $accent: BadgeAccent }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 96px;
  height: 96px;
  border-radius: ${({ theme }) => theme.radii.round};
  border: 1.6px solid ${({ $accent }) => badgeRing($accent)};
`;

export const BadgeGlyph = styled.span<{ $src: string }>`
  width: 46px;
  height: 46px;
  background: url(${({ $src }) => $src}) no-repeat center / contain;
`;

export const Showcase = styled.div`
  position: relative;
  width: min(1888px, calc(100vw - 64px));
  display: flex;
  justify-content: center;
`;

export const PhotoCard = styled.span<
  { $ratio: number; $maxW: string } & InsetProps
>`
  position: absolute;
  display: none;
  width: clamp(240px, 22vw, ${({ $maxW }) => $maxW});
  aspect-ratio: ${({ $ratio }) => $ratio};
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 24px 50px rgba(0, 0, 0, 0.4);
  ${insetProps}

  & img {
    object-fit: cover;
  }

  ${({ theme }) => theme.media.desktop} {
    display: block;
  }
`;

export const Phone = styled.div`
  position: relative;
  width: clamp(260px, 32vw, 340px);
  aspect-ratio: 340 / 700;
  padding: 14px;
  border-radius: 48px;
  background: #0b0c24;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
  box-shadow:
    0 40px 80px rgba(0, 0, 0, 0.45),
    0 0 0 6px rgba(253, 103, 33, 0.16);
  transition:
    transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow:
      0 55px 100px rgba(0, 0, 0, 0.5),
      0 0 0 8px rgba(253, 103, 33, 0.28);
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 6px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 18px;
    left: 50%;
    transform: translateX(-50%);
    width: 38%;
    height: 18px;
    border-radius: 999px;
    background: #0b0c24;
    z-index: 2;
  }
`;

export const Screen = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 34px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.backgroundDeep};
`;

export const Track = styled.div`
  display: flex;
  height: 100%;
`;

const accentColor = (theme: DefaultTheme, accent: Accent) =>
  theme.colors[accent];

export const Slide = styled.div<{ $accent: Accent; $active: boolean }>`
  position: relative;
  flex: 0 0 100%;
  height: 100%;
  overflow: hidden;
  background: ${({ theme, $accent }) =>
    `radial-gradient(120% 80% at 50% 0%, ${accentColor(theme, $accent)} 0%, ${theme.colors.backgroundDeep} 70%)`};

  & .slide-cover {
    object-fit: cover;
    transform: scale(${({ $active }) => ($active ? 1.06 : 1)});
    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }
`;

export const SlideInfo = styled.div`
  position: absolute;
  inset-inline: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 40px 22px 24px;
  text-align: left;
  background: linear-gradient(
    to top,
    rgba(11, 12, 36, 0.95) 0%,
    rgba(11, 12, 36, 0.7) 55%,
    rgba(11, 12, 36, 0) 100%
  );
`;

export const SlideName = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  letter-spacing: 0.2px;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.text};
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.5);
`;

export const SlideTag = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: rgba(255, 255, 255, 0.82);
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.5);
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const Arrow = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  font-size: 28px;
  line-height: 1;
  border-radius: ${({ theme }) => theme.radii.round};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.onPrimary};
  transition:
    transform 0.2s ease,
    background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
    transform: scale(1.08);
  }
`;

export const Dots = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Dot = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? "32px" : "12px")};
  height: 12px;
  border-radius: 999px;
  background: ${({ theme, $active }) =>
    $active ? theme.colors.primary : theme.colors.border};
  transition:
    width 0.3s ease,
    background 0.3s ease;
`;

export const DetailsButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: 12px 28px;
  border-radius: ${({ theme }) => theme.radii.pill};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  border: 2px solid ${({ theme }) => theme.colors.border};
  transition:
    border-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const KeyboardHint = styled.p<{ $show: boolean }>`
  display: none;
  align-items: center;
  gap: 10px;
  margin-top: ${({ theme }) => theme.spacing.lg};
  font-size: 14px;
  letter-spacing: 0.2px;
  color: ${({ theme }) => theme.colors.textMuted};
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  transform: translateY(${({ $show }) => ($show ? "0" : "6px")});
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
  pointer-events: none;

  ${({ theme }) => theme.media.desktop} {
    display: inline-flex;
  }

  ${({ theme }) => theme.media.reducedMotion} {
    transition: none;
  }
`;

export const Kbd = styled.kbd`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 26px;
  height: 26px;
  padding: 0 7px;
  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 13px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: 1;
`;
