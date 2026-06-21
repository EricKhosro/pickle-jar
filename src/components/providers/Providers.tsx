"use client";

import StyledComponentsRegistry from "@/lib/registry";
import { ThemeModeProvider } from "./ThemeModeProvider";
import SmoothScroll from "./SmoothScroll";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <ThemeModeProvider>
        <SmoothScroll>{children}</SmoothScroll>
      </ThemeModeProvider>
    </StyledComponentsRegistry>
  );
}
