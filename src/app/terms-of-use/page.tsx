import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/site";
import Terms from "./Terms";

const DESCRIPTION =
  "The terms and conditions that govern your use of the Pickle Jar Games website, games, and services.";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: DESCRIPTION,
  alternates: { canonical: "/terms-of-use" },
  openGraph: {
    type: "article",
    url: "/terms-of-use",
    title: "Terms of Use | Pickle Jar Games",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: "Terms of Use | Pickle Jar Games",
    description: DESCRIPTION,
  },
};

const termsLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/terms-of-use#webpage`,
      url: `${SITE_URL}/terms-of-use`,
      name: "Terms of Use",
      description: DESCRIPTION,
      inLanguage: "en",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      breadcrumb: { "@id": `${SITE_URL}/terms-of-use#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/terms-of-use#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Terms of Use",
          item: `${SITE_URL}/terms-of-use`,
        },
      ],
    },
  ],
};

export default function TermsOfUsePage() {
  return (
    <>
      <JsonLd data={termsLd} />
      <Terms />
    </>
  );
}
