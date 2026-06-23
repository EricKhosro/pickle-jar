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
  const [open, setOpen] = useState<number | null>(null);

  useGSAP(
    () => {
      gsap.set(scope.current, { autoAlpha: 1 });

      const items = gsap.utils.toArray<HTMLElement>(".faq-item", scope.current);
      items.forEach((el) => gsap.set(el, { rotation: Number(el.dataset.tilt) || 0 }));

      gsap.from(".faq-heading", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        clearProps: "transform",
        scrollTrigger: { trigger: scope.current, start: "top 75%", once: true },
      });

      gsap.from(items, {
        y: 40,
        autoAlpha: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: scope.current, start: "top 75%", once: true },
      });
    },
    { scope },
  );

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>(".faq-item", scope.current);
      items.forEach((el, i) => {
        gsap.to(el, {
          rotation: i === open ? 0 : Number(el.dataset.tilt) || 0,
          duration: 0.45,
          ease: "power2.inOut",
        });
      });

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
        <Heading className="faq-heading">FAQ</Heading>
        <List>
          {FAQS.map((f, i) => {
            const accent = i % 2 === 0 ? "indigo" : "orange";
            const tilt = i % 2 === 0 ? -1.5 : 1.5;
            return (
              <Item
                key={f.question}
                className="faq-item"
                data-tilt={tilt}
                $accent={accent}
              >
                <Trigger
                  type="button"
                  aria-expanded={i === open}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <Q>
                    {f.question} <Mark $accent={accent}>?</Mark>
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
            );
          })}
        </List>
      </Inner>
    </Section>
  );
}
