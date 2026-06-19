"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  gsap.defaults({ ease: "power3.out", duration: 0.8 });

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (prefersReduced) {
    gsap.globalTimeline.timeScale(200);
  }
}

export { gsap, ScrollTrigger, useGSAP };
