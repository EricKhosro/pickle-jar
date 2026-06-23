import { RefObject } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import observeNear from "@/lib/observeNear";

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
      const el = scope.current;
      if (!el) return;

      let ctx: gsap.Context | null = null;

      const build = () => {
        ctx = gsap.context(() => {
          if (setVisible) gsap.set(el, { autoAlpha: 1 });
          gsap.from(selector, {
            y: 40,
            opacity: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
            clearProps: "transform",
            scrollTrigger: { trigger: el, start, once: true },
          });
        }, el);
      };

      const stop = observeNear(el, build);

      return () => {
        stop();
        ctx?.revert();
      };
    },
    { scope },
  );
};

export default useReveal;
