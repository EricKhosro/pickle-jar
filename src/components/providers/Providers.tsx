"use client";

import StyledComponentsRegistry from "@/lib/registry";
import { ThemeModeProvider } from "./ThemeModeProvider";
import SmoothScroll from "./SmoothScroll";
import type { ThemeMode } from "@/styles/theme";

export default function Providers({
  children,
  initialMode,
}: {
  children: React.ReactNode;
  initialMode: ThemeMode;
}) {
  return (
    <StyledComponentsRegistry>
      <ThemeModeProvider initialMode={initialMode}>
        <SmoothScroll>{children}</SmoothScroll>
      </ThemeModeProvider>
    </StyledComponentsRegistry>
  );
}
