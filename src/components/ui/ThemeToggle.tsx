"use client";

import { flushSync } from "react-dom";
import styled from "styled-components";
import { useThemeMode } from "@/components/providers/ThemeModeProvider";
import { darkTheme, lightTheme } from "@/styles/theme";
import { gsap } from "@/lib/gsap";
import { Icon } from "@/components/ui/Icon";

const ToggleButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} 0;
  background: transparent;
  color: inherit;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 1.2px;
  transition: opacity ${({ theme }) => theme.transitions.fast};

  &:hover {
    opacity: 0.7;
  }
`;

const REVEAL = { duration: 0.7, ease: "power2.inOut" };

export default function ThemeToggle() {
  const { mode, toggleTheme } = useThemeMode();
  const isDark = mode === "dark";

  const onToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      toggleTheme();
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const doc = document;

    if (doc.startViewTransition) {
      const transition = doc.startViewTransition(() => {
        flushSync(() => toggleTheme());
      });
      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${radius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: REVEAL.duration * 1000,
            easing: "cubic-bezier(0.65, 0, 0.35, 1)",
            pseudoElement: "::view-transition-new(root)",
          },
        );
      });
      return;
    }

    const nextBg = isDark
      ? lightTheme.colors.background
      : darkTheme.colors.background;
    const overlay = document.createElement("div");
    overlay.style.cssText = `position:fixed;top:${y}px;left:${x}px;width:${radius * 2}px;height:${radius * 2}px;margin:${-radius}px 0 0 ${-radius}px;border-radius:50%;background:${nextBg};z-index:9998;pointer-events:none;`;
    document.body.appendChild(overlay);

    gsap.fromTo(
      overlay,
      { scale: 0 },
      {
        scale: 1,
        ...REVEAL,
        transformOrigin: "center center",
        onComplete: () => {
          toggleTheme();
          gsap.to(overlay, {
            autoAlpha: 0,
            duration: 0.3,
            delay: 0.02,
            onComplete: () => overlay.remove(),
          });
        },
      },
    );
  };

  return (
    <ToggleButton
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      <Icon
        $src={isDark ? "/assets/icons/sun.svg" : "/assets/icons/moon.svg"}
        $size="18px"
        aria-hidden="true"
      />
      {isDark ? "Light" : "Dark"}
    </ToggleButton>
  );
}
