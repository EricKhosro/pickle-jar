import styled from "styled-components";
import { DefaultTheme } from "styled-components";

type Accent = "primary" | "surfaceRaised" | "accent";

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

export const Badge = styled.span<{
  $accent: "primary" | "surfaceRaised";
  $top?: string;
  $left?: string;
  $right?: string;
  $bottom?: string;
}>`
  position: absolute;
  display: none;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  max-width: 230px;
  padding: 12px 18px;
  border-radius: ${({ theme }) => theme.radii.pill};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: 14px;
  line-height: 1.3;
  text-align: left;
  background: ${({ theme, $accent }) => theme.colors[$accent]};
  color: ${({ theme, $accent }) =>
    $accent === "primary" ? theme.colors.onPrimary : theme.colors.text};
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.3);
  top: ${({ $top }) => $top ?? "auto"};
  left: ${({ $left }) => $left ?? "auto"};
  right: ${({ $right }) => $right ?? "auto"};
  bottom: ${({ $bottom }) => $bottom ?? "auto"};

  ${({ theme }) => theme.media.desktop} {
    display: inline-flex;
  }
`;

export const Phone = styled.div`
  position: relative;
  width: clamp(260px, 32vw, 340px);
  aspect-ratio: 340 / 700;
  padding: 14px;
  border-radius: 48px;
  background: #0b0c24;
  box-shadow:
    0 40px 80px rgba(0, 0, 0, 0.45),
    inset 0 0 0 2px rgba(255, 255, 255, 0.06);

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

export const Track = styled.div<{ $index: number }>`
  display: flex;
  height: 100%;
  transform: ${({ $index }) => `translateX(-${$index * 100}%)`};
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
`;

const accentColor = (theme: DefaultTheme, accent: Accent) =>
  theme.colors[accent];

export const Slide = styled.button<{ $accent: Accent }>`
  flex: 0 0 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  cursor: pointer;
  background: ${({ theme, $accent }) =>
    `radial-gradient(120% 80% at 50% 0%, ${accentColor(theme, $accent)} 0%, ${theme.colors.backgroundDeep} 70%)`};
`;

export const SlideIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 84px;
  height: 84px;
  border-radius: ${({ theme }) => theme.radii.round};
  color: ${({ theme }) => theme.colors.text};
  background: rgba(255, 255, 255, 0.12);
`;

export const SlideName = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeights.black};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.text};
`;

export const SlideTag = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 22ch;
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
