import type { Metadata } from "next";
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

export default function TermsOfUsePage() {
  return <Terms />;
}
