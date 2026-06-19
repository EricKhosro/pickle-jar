"use client";

import { Button } from "@/components/ui/Button";
import { Section, Inner, Eyebrow, Heading } from "./About.styles";

export default function About() {
  return (
    <Section id="about">
      <Inner>
        <Eyebrow>About us</Eyebrow>
        <Heading>Discover the world&apos;s largest shared pickles jar</Heading>
        <Button type="button" $variant="primary" $size="lg">
          Get to know us
        </Button>
      </Inner>
    </Section>
  );
}
