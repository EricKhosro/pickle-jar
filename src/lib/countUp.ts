import { gsap } from "@/lib/gsap";

type CountUpOptions = {
  trigger: Element | null;
  start?: string;
  duration?: number;
  format?: (value: number) => string;
};

export default function countUp(
  el: HTMLElement,
  target: number,
  { trigger, start = "top 80%", duration = 2, format = (n) => `${n}` }: CountUpOptions,
) {
  const counter = { value: 0 };
  gsap.to(counter, {
    value: target,
    duration,
    ease: "power2.out",
    scrollTrigger: { trigger, start, once: true },
    onUpdate: () => {
      el.textContent = format(Math.round(counter.value));
    },
  });
}
