"use client";

import { useRef } from "react";
import { DecorLayer, Heading } from "@/components/sections/common.styles";
import { PickleConfig } from "@/components/sections/types";
import Pickles from "@/components/ui/Pickles";
import usePickles from "@/hooks/usePickles";
import {
  Page,
  Inner,
  Back,
  Eyebrow,
  Updated,
  Intro,
  Block,
  SubHeading,
  Text,
} from "./Terms.styles";

type TermsSection = {
  heading: string;
  body: string[];
};

const PICKLES: PickleConfig[] = [
  { top: "5%", left: "90%", w: 150, rotate: -25, speed: 30, hide: true },
  { top: "17%", left: "3%", w: 130, rotate: 65, speed: -26, hide: true },
  { top: "33%", left: "92%", w: 120, rotate: 150, speed: 24, hide: true },
  { top: "48%", left: "2%", w: 165, rotate: -12, speed: -22, hide: true },
  { top: "63%", left: "91%", w: 140, rotate: 200, speed: 26, hide: true },
  { top: "77%", left: "4%", w: 130, rotate: 35, speed: -28, hide: true },
  { top: "90%", left: "89%", w: 155, rotate: -40, speed: 28, hide: true },
];

const SECTIONS: TermsSection[] = [
  {
    heading: "1. Acceptance of Terms",
    body: [
      "By accessing or using the Pickle Jar Games website (the “Site”) and any related games, content, or services, you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree with any part of these terms, please do not use the Site.",
    ],
  },
  {
    heading: "2. Eligibility",
    body: [
      "You must be at least 13 years old to use the Site. If you are under the age of majority in your jurisdiction, you may only use the Site with the involvement and consent of a parent or legal guardian.",
    ],
  },
  {
    heading: "3. Use of the Site",
    body: [
      "We grant you a personal, non-exclusive, non-transferable, revocable license to access and use the Site for your own non-commercial enjoyment, subject to these terms.",
      "You agree not to misuse the Site, interfere with its normal operation, or attempt to access it using a method other than the interfaces and instructions we provide.",
    ],
  },
  {
    heading: "4. Intellectual Property",
    body: [
      "All content on the Site — including games, artwork, logos, text, graphics, audio, and software — is owned by or licensed to Pickle Jar Games and is protected by copyright, trademark, and other intellectual property laws.",
      "You may not copy, reproduce, distribute, modify, or create derivative works from any part of the Site without our prior written permission.",
    ],
  },
  {
    heading: "5. User Content",
    body: [
      "If you submit feedback, suggestions, or other materials to us, you grant Pickle Jar Games a worldwide, royalty-free, perpetual license to use, reproduce, and incorporate that content for any purpose, without obligation or compensation to you.",
      "You are solely responsible for any content you submit and confirm that you have the rights to share it.",
    ],
  },
  {
    heading: "6. Prohibited Conduct",
    body: [
      "You agree not to use the Site to engage in any unlawful, harmful, or abusive activity, including distributing malware, harvesting data, infringing the rights of others, or attempting to gain unauthorized access to our systems or accounts.",
    ],
  },
  {
    heading: "7. Third-Party Links",
    body: [
      "The Site may contain links to third-party websites or services that are not owned or controlled by Pickle Jar Games. We are not responsible for the content, policies, or practices of any third-party sites, and you access them at your own risk.",
    ],
  },
  {
    heading: "8. Disclaimers",
    body: [
      "The Site and all content are provided “as is” and “as available” without warranties of any kind, whether express or implied. We do not guarantee that the Site will be uninterrupted, secure, or error-free.",
    ],
  },
  {
    heading: "9. Limitation of Liability",
    body: [
      "To the fullest extent permitted by law, Pickle Jar Games shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of, or inability to use, the Site.",
    ],
  },
  {
    heading: "10. Indemnification",
    body: [
      "You agree to indemnify and hold harmless Pickle Jar Games and its team from any claims, damages, losses, or expenses arising out of your use of the Site or your violation of these terms.",
    ],
  },
  {
    heading: "11. Termination",
    body: [
      "We may suspend or terminate your access to the Site at any time, without notice, for conduct that we believe violates these terms or is otherwise harmful to other users or to Pickle Jar Games.",
    ],
  },
  {
    heading: "12. Changes to These Terms",
    body: [
      "We may update these Terms of Use from time to time. When we do, we will revise the “last updated” date above. Your continued use of the Site after changes take effect constitutes your acceptance of the revised terms.",
    ],
  },
  {
    heading: "13. Governing Law",
    body: [
      "These terms are governed by and construed in accordance with the laws of the jurisdiction in which Pickle Jar Games operates, without regard to its conflict of law provisions.",
    ],
  },
  {
    heading: "14. Contact Us",
    body: [
      "If you have any questions about these Terms of Use, please reach out through the contact form on our homepage and our team will be happy to help.",
    ],
  },
];

export default function Terms() {
  const scope = useRef<HTMLElement>(null);

  usePickles(scope, { origin: ".terms-title" });

  return (
    <Page
      as="main"
      ref={scope}
      $bg="background"
      $padBlock="clamp(140px, 16vw, 220px) clamp(80px, 12vw, 160px)"
      $padInline="clamp(20px, 5vw, 80px)"
    >
      <DecorLayer>
        <Pickles items={PICKLES} color="surfaceRaised" />
      </DecorLayer>

      <Inner>
        <Back href="/">← Back to home</Back>
        <Eyebrow>Legal</Eyebrow>
        <Heading
          as="h1"
          className="terms-title"
          $align="left"
          $size="clamp(48px, 9vw, 96px)"
        >
          Terms of Use
        </Heading>
        <Updated>Last updated: June 23, 2026</Updated>
        <Intro>
          Welcome to Pickle Jar Games. These Terms of Use set out the rules for
          using our website, games, and services. Please read them carefully —
          by using the Site, you agree to everything below.
        </Intro>

        {SECTIONS.map((section) => (
          <Block key={section.heading}>
            <SubHeading>{section.heading}</SubHeading>
            {section.body.map((paragraph, i) => (
              <Text key={i}>{paragraph}</Text>
            ))}
          </Block>
        ))}
      </Inner>
    </Page>
  );
}
