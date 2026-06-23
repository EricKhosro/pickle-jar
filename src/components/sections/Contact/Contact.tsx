"use client";

import { useRef } from "react";
import ContactForm from "./ContactForm";
import NewsletterForm from "./NewsletterForm";
import { DecorLayer } from "../common.styles";
import { PickleConfig } from "../types";
import Pickles from "@/components/ui/Pickles";
import usePickles from "@/hooks/usePickles";
import useReveal from "@/hooks/useReveal";
import { Section, Inner, Grid, Intro, Eyebrow, Heading } from "./Contact.styles";

const PICKLES: PickleConfig[] = [
  { top: "8%", left: "12%", w: 120, rotate: 40, speed: 32, hide: true },
  { top: "8%", left: "78%", w: 120, rotate: -28, speed: 32, hide: true },
  { top: "42%", left: "84%", w: 190, rotate: 180, speed: -26, hide: true },
  { top: "62%", left: "4%", w: 180, rotate: 100, speed: -26, hide: true },
  { top: "72%", left: "34%", w: 170, rotate: 18, speed: -26, hide: true },
];

export default function Contact() {
  const scope = useRef<HTMLElement>(null);

  useReveal(scope, ".c-reveal");
  usePickles(scope, { origin: ".c-form", reveal: true });

  return (
    <Section id="contact" ref={scope} data-gsap-hidden>
      <DecorLayer>
        <Pickles items={PICKLES} color="surfaceRaised" />
      </DecorLayer>

      <Inner>
        <Grid>
          <Intro>
            <Eyebrow className="c-reveal">Get in touch</Eyebrow>
            <Heading className="c-reveal">Join the jar</Heading>
            <div className="c-reveal">
              <NewsletterForm />
            </div>
          </Intro>

          <div className="c-reveal c-form">
            <ContactForm />
          </div>
        </Grid>
      </Inner>
    </Section>
  );
}
