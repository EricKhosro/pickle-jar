"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import ContactForm from "./ContactForm";
import NewsletterForm from "./NewsletterForm";
import { Section, Inner, Grid, Eyebrow, Heading, Card } from "./Contact.styles";

export default function Contact() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.set(scope.current, { autoAlpha: 1 });
      gsap.from(".c-reveal", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        clearProps: "transform",
        scrollTrigger: { trigger: scope.current, start: "top 75%", once: true },
      });
    },
    { scope },
  );

  return (
    <Section id="contact" ref={scope} data-gsap-hidden>
      <Inner>
        <Eyebrow className="c-reveal">Say hello</Eyebrow>
        <Heading className="c-reveal">Get in touch</Heading>
        <Grid>
          <Card className="c-reveal">
            <ContactForm />
          </Card>
          <div className="c-reveal">
            <NewsletterForm />
          </div>
        </Grid>
      </Inner>
    </Section>
  );
}
