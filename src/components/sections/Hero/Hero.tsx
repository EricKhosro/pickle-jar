"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { StoreBadge } from "@/components/ui/StoreBadge";
import {
  Section,
  BlobLayer,
  Deco,
  JarWrap,
  Jar,
  Content,
  Heading,
  BottomBar,
  Actions,
  ExploreMore,
} from "./Hero.styles";

const PICKLE_RATIO = 164 / 106;

const pw = (w: number) =>
  `clamp(${Math.round(w * 0.42)}px, ${(w / 19.2).toFixed(1)}vw, ${w}px)`;

const PICKLES = [
  { top: "20%", left: "1%", w: 190, rotate: 20, speed: 30 },
  { top: "10%", left: "90%", w: 320, rotate: 185, speed: -36 },
  { top: "48%", left: "15%", w: 300, rotate: 95, speed: 46 },
  { top: "70%", left: "75%", w: 210, rotate: 220, speed: -26 },
  { top: "3%", left: "20%", w: 100, rotate: 280, speed: 20 },
  { top: "31.8%", left: "77%", w: 175, rotate: -45, speed: 24 },
  { top: "-8%", left: "53%", w: 200, rotate: 20, speed: -22 },
] as const;

export default function Hero() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = scope.current!;
      const jar = root.querySelector<HTMLElement>(".jar")!;
      const pickles = gsap.utils.toArray<HTMLElement>(".pickle");
      gsap.set(scope.current, { autoAlpha: 1 });
      gsap.set(jar, { xPercent: -50 });

      const jarRect = jar.getBoundingClientRect();
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

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-line", {
        yPercent: 110,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
      })
        .from(
          ".hero-fade",
          { y: 24, opacity: 0, duration: 0.7, stagger: 0.1 },
          "-=0.4",
        )
        .from(
          jar,
          {
            yPercent: -24,
            scale: 1.2,
            autoAlpha: 0,
            duration: 1,
            ease: "expo.out",
          },
          "-=0.6",
        )
        .to(
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

  return (
    <Section ref={scope} id="home">
      <BlobLayer>
        {PICKLES.map((p, i) => (
          <Deco
            key={i}
            className="pickle"
            aria-hidden="true"
            data-rotate={p.rotate}
            data-speed={p.speed}
            style={{
              top: p.top,
              left: p.left,
              width: pw(p.w),
              height: `calc(${pw(p.w)} * ${PICKLE_RATIO})`,
              backgroundColor: "var(--blob-indigoLight)",
            }}
          />
        ))}
        <JarWrap className="jar" aria-hidden="true">
          <Jar />
        </JarWrap>
      </BlobLayer>

      <Content>
        <Heading>
          <span className="hero-line">Redefine</span>
          <span className="hero-line">Mobile Gaming</span>
          <span className="hero-line">Industry</span>
        </Heading>
      </Content>

      <BottomBar>
        <Actions className="hero-fade">
          <StoreBadge store="android" />
          <StoreBadge store="ios" />
        </Actions>
        <ExploreMore className="hero-fade" href="#about">
          Explore more
        </ExploreMore>
      </BottomBar>
    </Section>
  );
}
