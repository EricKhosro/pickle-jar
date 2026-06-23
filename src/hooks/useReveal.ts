import { RefObject } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type RevealOptions = {
  start?: string;
  setVisible?: boolean;
};

const useReveal = (
  scope: RefObject<HTMLElement | null>,
  selector: string,
  { start = "top 75%", setVisible = true }: RevealOptions = {},
) => {
  useGSAP(
    () => {
      if (setVisible) gsap.set(scope.current, { autoAlpha: 1 });
      gsap.from(selector, {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        clearProps: "transform",
        scrollTrigger: { trigger: scope.current, start, once: true },
      });
    },
    { scope },
  );
};

export default useReveal;
