"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import usePickles from "@/hooks/usePickles";
import Pickles from "@/components/ui/Pickles";
import { DecorLayer, HalfPickle } from "../common.styles";
import { PickleConfig } from "../types";
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

const PICKLES: PickleConfig[] = [
  { top: "10%", left: "4%", w: 120, rotate: -25, speed: 28, hide: true },
  { top: "11%", left: "92%", w: 140, rotate: 70, speed: -24, hide: true },
  { top: "45%", left: "-3%", w: 110, rotate: 70, speed: -20 },
  { top: "88%", left: "94%", w: 130, rotate: -10, speed: 26, hide: true },
];

export default function FAQ() {
  const scope = useRef<HTMLElement>(null);
  const answers = useRef<(HTMLDivElement | null)[]>([]);
  const [open, setOpen] = useState<number | null>(null);

  usePickles(scope, { origin: ".faq-heading", defer: true });

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
      <DecorLayer>
        <Pickles items={PICKLES} color="surfaceRaised" />
        <HalfPickle
          className="seam-pickle"
          aria-hidden="true"
          data-speed={20}
          $edge="top"
          $left="64%"
          $w={180}
          $rotate={15}
          $color="surfaceRaised"
          $hideOnMobile
        />
      </DecorLayer>
      <Inner>
        <Heading className="faq-heading">FAQ</Heading>
        <List>
          {FAQS.map((f, i) => {
            const accent = i % 2 === 0 ? "surfaceRaised" : "surface";
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
            );
          })}
        </List>
      </Inner>
    </Section>
  );
}
