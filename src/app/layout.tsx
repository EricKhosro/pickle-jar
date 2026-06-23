import type { Metadata, Viewport } from "next";
import Providers from "@/components/providers/Providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollSpy from "@/components/layout/ScrollSpy";
import CustomCursorMount from "@/components/ui/CustomCursorMount";
import { fontVariables } from "@/styles/fonts";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Pickle Jar Games — Independent Game Studio",
    template: "%s | Pickle Jar Games",
  },
  description: SITE_DESCRIPTION,
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
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Pickle Jar Games — Independent Game Studio",
    description: SITE_DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#26286e" },
    { media: "(prefers-color-scheme: light)", color: "#e7e3f7" },
  ],
};

const siteLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      image: `${SITE_URL}/opengraph-image`,
      description: SITE_DESCRIPTION,
      slogan: "Redefine Mobile Gaming Industry",
      foundingDate: "2019",
      email: "hello@picklejar.games",
      telephone: "+1-000-000-0000",
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Placeholder Street",
        addressLocality: "City",
        addressRegion: "Region",
        postalCode: "00000",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "0.000000",
        longitude: "0.000000",
      },
      openingHours: "Mo-Fr 09:00-18:00",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        email: "hello@picklejar.games",
        url: `${SITE_URL}/#contact`,
        availableLanguage: "English",
      },
      knowsAbout: [
        "Game Development",
        "Indie Games",
        "Mobile Games",
        "Live Operations",
      ],
      sameAs: ["https://discord.gg/bvgWmyPX"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
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
        <JsonLd data={siteLd} />
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollSpy />
          <CustomCursorMount />
        </Providers>
      </body>
    </html>
  );
}
