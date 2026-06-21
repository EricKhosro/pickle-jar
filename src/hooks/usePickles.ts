import { RefObject } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type PicklesOptions = {
  origin: string;
  reveal?: boolean;
  animateOrigin?: boolean;
  intro?: (tl: gsap.core.Timeline) => void;
  scroll?: boolean;
  delay?: number;
  parallax?: boolean;
};

const usePickles = (
  scope: RefObject<HTMLElement | null>,
  {
    origin,
    reveal = false,
    animateOrigin = false,
    intro,
    scroll = false,
    delay,
    parallax = true,
  }: PicklesOptions,
) => {
  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;

      const originEl = root.querySelector<HTMLElement>(origin);
      const pickles = gsap.utils.toArray<HTMLElement>(".pickle", root);

      if (reveal) gsap.set(root, { autoAlpha: 1 });

      // Seam pickles span two sections; pop them on a fixed delay from load
      // (not the section's intro) so both halves arrive at the same moment.
      const seams = gsap.utils.toArray<HTMLElement>(".seam-pickle", root);
      if (seams.length) {
        gsap
          .timeline({ delay: 0.9 })
          .set(seams, { opacity: 0, scale: 0, transformOrigin: "50% 50%" })
          .to(seams, {
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: "back.out(1.7)",
          });
      }

      if (!originEl || !pickles.length) return;

      if (animateOrigin) gsap.set(originEl, { xPercent: -50 });

      const ob = originEl.getBoundingClientRect();
      const ox = ob.left + ob.width / 2;
      const oy = ob.top + ob.height * (animateOrigin ? 0.12 : 0.5);

      pickles.forEach((el) => {
        const r = el.getBoundingClientRect();
        gsap.set(el, {
          x: ox - (r.left + r.width / 2),
          y: oy - (r.top + r.height / 2),
          scale: 0,
          autoAlpha: 0,
          rotation: 0,
        });
      });

      let ready = false;
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay,
        scrollTrigger: scroll
          ? { trigger: root, start: "top 70%", once: true }
          : undefined,
      });

      intro?.(tl);

      if (animateOrigin) {
        tl.from(
          originEl,
          {
            yPercent: -24,
            scale: 1.2,
            autoAlpha: 0,
            duration: 1,
            ease: "expo.out",
          },
          intro ? "-=0.6" : 0,
        );
      }

      tl.to(
        pickles,
        {
          x: 0,
          y: 0,
          scale: 1,
          autoAlpha: 1,
          rotation: (_i, el) => Number(el.dataset.rotate) || 0,
          duration: 0.9,
          ease: "back.out(1.7)",
          stagger: 0.08,
          onComplete: () => {
            ready = true;
          },
        },
        animateOrigin ? "-=0.55" : intro ? "-=0.4" : 0,
      );

      if (!parallax) return;

      const setters = [...pickles, ...seams].map((el) => ({
        x: gsap.quickTo(el, "x", { duration: 0.8, ease: "power3" }),
        y: gsap.quickTo(el, "y", { duration: 0.8, ease: "power3" }),
        speed: Number(el.dataset.speed) || 20,
      }));

      const onMove = (e: PointerEvent) => {
        if (!ready) return;
        const dx = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
        const dy =
          (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
        setters.forEach((s) => {
          s.x(dx * s.speed);
          s.y(dy * s.speed);
        });
      };

      window.addEventListener("pointermove", onMove);
      return () => window.removeEventListener("pointermove", onMove);
    },
    { scope },
  );
};

export default usePickles;
