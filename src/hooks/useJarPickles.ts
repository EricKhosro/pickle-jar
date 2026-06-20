import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

interface JarPicklesOptions {
  intro?: (tl: gsap.core.Timeline) => void;
  parallax?: boolean;
  delay?: number;
}

const useJarPickles = ({
  intro,
  parallax = true,
  delay,
}: JarPicklesOptions) => {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = scope.current!;
      const jar = root.querySelector<HTMLElement>(".jar");
      const pickles = gsap.utils.toArray<HTMLElement>(".pickle", root);

      gsap.set(root, { autoAlpha: 1 });
      gsap.set(jar, { xPercent: -50 });

      const jarRect = jar?.getBoundingClientRect()!;
      const originX = jarRect.left + jarRect.width / 2;
      const originY = jarRect.top + jarRect.height * 0.12;

      pickles.forEach((el) => {
        const r = el.getBoundingClientRect();
        gsap.set(el, {
          x: originX - (r.left + r.width / 2),
          y: originY - (r.top + r.height / 2),
          scale: 0,
          autoAlpha: 0,
          rotation: 0,
        });
      });

      let ready = false;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay });

      intro?.(tl);

      tl.from(
        jar,
        {
          yPercent: -24,
          scale: 1.2,
          autoAlpha: 0,
          duration: 1,
          ease: "expo.out",
        },
        intro ? "-=0.6" : 0,
      ).to(
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
        "-=0.55",
      );

      if (!parallax) return;

      const setters = pickles.map((el) => ({
        x: gsap.quickTo(el, "x", { duration: 0.8, ease: "power3" }),
        y: gsap.quickTo(el, "y", { duration: 0.8, ease: "power3" }),
        speed: Number(el.dataset.speed) || 20,
      }));

      const onMove = (e: PointerEvent) => {
        if (!ready) return;
        const dx =
          (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
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

  return scope;
};

export default useJarPickles;
