"use client";

import StyledComponentsRegistry from "@/lib/registry";
import { ThemeModeProvider } from "./ThemeModeProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <ThemeModeProvider>{children}</ThemeModeProvider>
    </StyledComponentsRegistry>
  );
}
