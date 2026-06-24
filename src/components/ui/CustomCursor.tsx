"use client";

import { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "@/lib/gsap";

const Star = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.cursor};
  width: 96px;
  aspect-ratio: 88 / 69;
  background: url("/assets/illustrations/conceptstudio-cursor.svg") no-repeat
    center / contain;
  mix-blend-mode: difference;
  pointer-events: none;
  opacity: 0;
  will-change: transform;
`;

const REST_SCALE = 0.55;

const INTERACTIVE =
  "a, button, input, textarea, select, label, [role='button'], [role='tab']";

export default function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const el = ref.current;
    if (!el) return;

    gsap.set(el, { xPercent: -50, yPercent: -50, scale: REST_SCALE });

    const moveX = gsap.quickTo(el, "x", { duration: 0.3, ease: "power3" });
    const moveY = gsap.quickTo(el, "y", { duration: 0.3, ease: "power3" });
    const spin = gsap.quickTo(el, "rotation", {
      duration: 0.9,
      ease: "power2",
    });

    let visible = false;
    let hovering = false;

    const show = () => {
      if (visible) return;
      visible = true;
      gsap.to(el, { autoAlpha: 1, duration: 0.25 });
    };

    const hide = () => {
      visible = false;
      gsap.to(el, { autoAlpha: 0, duration: 0.2 });
    };

    const onMove = (e: PointerEvent) => {
      if (!visible) {
        gsap.set(el, { x: e.clientX, y: e.clientY });
      } else {
        moveX(e.clientX);
        moveY(e.clientY);
      }
      spin(gsap.utils.mapRange(0, window.innerWidth, -180, 180, e.clientX));
      show();

      const target = e.target instanceof Element ? e.target : null;
      const isInteractive = !!target?.closest(INTERACTIVE);
      if (isInteractive !== hovering) {
        hovering = isInteractive;
        gsap.to(el, {
          scale: isInteractive ? 1 : REST_SCALE,
          duration: 0.25,
          ease: "power3.out",
        });
      }
    };

    window.addEventListener("pointermove", onMove);
    document.addEventListener("mouseleave", hide);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseleave", hide);
    };
  }, []);

  return <Star ref={ref} aria-hidden="true" />;
}
