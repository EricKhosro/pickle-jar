import type { Metadata, Viewport } from "next";
import Providers from "@/components/providers/Providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollSpy from "@/components/layout/ScrollSpy";
import CustomCursor from "@/components/ui/CustomCursor";
import { fontVariables } from "@/styles/fonts";

const SITE_URL = "https://picklejar.games";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Pickle Jar Games — Independent Game Studio",
    template: "%s | Pickle Jar Games",
  },
  description:
    "Pickle Jar Games is an independent studio crafting bold, playful games. Explore our featured titles, meet the team, and join the community.",
  keywords: [
    "Pickle Jar Games",
    "indie game studio",
    "video games",
    "game development",
  ],
  authors: [{ name: "Pickle Jar Games" }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Pickle Jar Games",
    title: "Pickle Jar Games — Independent Game Studio",
    description:
      "Bold, playful games from an independent studio. Explore our featured titles and meet the team.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pickle Jar Games — Independent Game Studio",
    description:
      "Bold, playful games from an independent studio. Explore our featured titles and meet the team.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0c0c0d" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={fontVariables}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollSpy />
          <CustomCursor />
        </Providers>
      </body>
    </html>
  );
}
