"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { FAQS } from "./faqs";
import {
  Section,
  Inner,
  Heading,
  List,
  Item,
  Trigger,
  Q,
  Mark,
  AnswerWrap,
  Answer,
} from "./FAQ.styles";

export default function FAQ() {
  const scope = useRef<HTMLElement>(null);
  const answers = useRef<(HTMLDivElement | null)[]>([]);
  const [open, setOpen] = useState<number | null>(0);

  useGSAP(
    () => {
      gsap.set(scope.current, { autoAlpha: 1 });
      gsap.from(".faq-reveal", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        clearProps: "transform",
        scrollTrigger: { trigger: scope.current, start: "top 75%", once: true },
      });
    },
    { scope },
  );

  useGSAP(
    () => {
      answers.current.forEach((el, i) => {
        if (!el) return;
        gsap.to(el, {
          height: i === open ? "auto" : 0,
          duration: 0.45,
          ease: "power2.inOut",
        });
      });
    },
    { dependencies: [open], scope },
  );

  return (
    <Section id="faq" ref={scope} data-gsap-hidden>
      <Inner>
        <Heading className="faq-reveal">FAQ</Heading>
        <List>
          {FAQS.map((f, i) => (
            <Item key={f.question} className="faq-reveal" $open={i === open}>
              <Trigger
                type="button"
                aria-expanded={i === open}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <Q>
                  {f.question} <Mark>?</Mark>
                </Q>
              </Trigger>
              <AnswerWrap
                ref={(el) => {
                  answers.current[i] = el;
                }}
              >
                <Answer>{f.answer}</Answer>
              </AnswerWrap>
            </Item>
          ))}
        </List>
      </Inner>
    </Section>
  );
}
