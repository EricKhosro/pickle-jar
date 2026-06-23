"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import useReveal from "@/hooks/useReveal";
import { STATS } from "./metrics";
import { Section, Inner, Item, Num, Label } from "./Stats.styles";

export default function Stats() {
  const scope = useRef<HTMLElement>(null);
  const nums = useRef<(HTMLSpanElement | null)[]>([]);

  useReveal(scope, ".stat", { start: "top 80%" });

  useGSAP(
    () => {
      STATS.forEach((stat, i) => {
        const el = nums.current[i];
        if (!el) return;
        const counter = { value: 0 };
        gsap.to(counter, {
          value: stat.value,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: scope.current,
            start: "top 80%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = `${Math.round(counter.value)}${stat.suffix}`;
          },
        });
      });
    },
    { scope },
  );

  return (
    <Section ref={scope} data-gsap-hidden aria-label="Studio statistics">
      <Inner>
        {STATS.map((stat, i) => (
          <Item key={stat.label} className="stat">
            <Num
              ref={(el) => {
                nums.current[i] = el;
              }}
            >
              {stat.value}
              {stat.suffix}
            </Num>
            <Label>{stat.label}</Label>
          </Item>
        ))}
      </Inner>
    </Section>
  );
}
