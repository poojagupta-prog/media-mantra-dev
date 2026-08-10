"use client";

import { PageLoader } from "@/components/layout/page-loader";
import { CustomCursor } from "@/components/layout/custom-cursor";
import { ColorThemeProvider } from "@/components/theme/color-theme-provider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ColorThemeProvider>
      <PageLoader />
      <CustomCursor />
      {children}
    </ColorThemeProvider>
  );
}
