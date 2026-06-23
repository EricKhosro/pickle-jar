"use client";

import styled from "styled-components";
import { useThemeMode } from "@/components/providers/ThemeModeProvider";
import { darkTheme, lightTheme } from "@/styles/theme";
import { gsap } from "@/lib/gsap";

const ToggleButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} 0;
  background: transparent;
  color: inherit;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  letter-spacing: 1.2px;
  transition: opacity ${({ theme }) => theme.transitions.fast};

  &:hover {
    opacity: 0.7;
  }
`;

export default function ThemeToggle() {
  const { mode, toggleTheme } = useThemeMode();

  const onToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      toggleTheme();
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const nextBg =
      mode === "dark"
        ? lightTheme.colors.background
        : darkTheme.colors.background;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const overlay = document.createElement("div");
    overlay.style.cssText = `position:fixed;top:${y}px;left:${x}px;width:${radius * 2}px;height:${radius * 2}px;margin:${-radius}px 0 0 ${-radius}px;border-radius:50%;background:${nextBg};z-index:9998;pointer-events:none;`;
    document.body.appendChild(overlay);

    gsap.fromTo(
      overlay,
      { scale: 0 },
      {
        scale: 1,
        duration: 0.6,
        ease: "power2.inOut",
        transformOrigin: "center center",
        onComplete: () => {
          toggleTheme();
          window.setTimeout(() => overlay.remove(), 80);
        },
      },
    );
  };

  return (
    <ToggleButton
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} theme`}
    >
      {mode === "dark" ? "🌙 Dark" : "☀️ Light"}
    </ToggleButton>
  );
}
