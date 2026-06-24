"use client";

import { useRef } from "react";
import { useGSAP } from "@/lib/gsap";
import useReveal from "@/hooks/useReveal";
import countUp from "@/lib/countUp";
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
        countUp(el, stat.value, {
          trigger: scope.current,
          start: "top 80%",
          format: (n) => `${n}${stat.suffix}`,
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
