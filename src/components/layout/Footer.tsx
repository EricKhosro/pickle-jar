"use client";

import { useRef } from "react";
import Logo from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";
import { StoreBadge } from "@/components/ui/StoreBadge";
import { DecorLayer } from "@/components/sections/common.styles";
import { PickleConfig } from "@/components/sections/types";
import Pickles from "@/components/ui/Pickles";
import usePickles from "@/hooks/usePickles";
import {
  FooterRoot,
  Inner,
  Top,
  Brand,
  Stores,
  Col,
  ColTitle,
  FootLink,
  WaveChar,
  Socials,
  Social,
  Bottom,
} from "./Footer.styles";

const PICKLES: PickleConfig[] = [
  { top: "6%", left: "4%", w: 110, rotate: 20, speed: -26, hide: true },
  { top: "9%", left: "21%", w: 95, rotate: 150, speed: 20, hide: true },
  { top: "4%", left: "37%", w: 120, rotate: -40, speed: -18, hide: true },
  { top: "10%", left: "53%", w: 100, rotate: 205, speed: 28, hide: true },
  { top: "5%", left: "69%", w: 115, rotate: 80, speed: -22, hide: true },
  { top: "9%", left: "86%", w: 105, rotate: -15, speed: 16, hide: true },
  { top: "26%", left: "11%", w: 100, rotate: -65, speed: 24, hide: true },
  { top: "30%", left: "28%", w: 125, rotate: 110, speed: -30, hide: true },
  { top: "24%", left: "45%", w: 95, rotate: 30, speed: 18, hide: true },
  { top: "29%", left: "62%", w: 115, rotate: -25, speed: -24, hide: true },
  { top: "25%", left: "78%", w: 105, rotate: 170, speed: 28, hide: true },
  { top: "30%", left: "94%", w: 120, rotate: 60, speed: -16, hide: true },
  { top: "47%", left: "5%", w: 118, rotate: 15, speed: -22, hide: true },
  { top: "50%", left: "22%", w: 98, rotate: -80, speed: 30, hide: true },
  { top: "45%", left: "39%", w: 112, rotate: 95, speed: -18, hide: true },
  { top: "51%", left: "55%", w: 100, rotate: 200, speed: 24, hide: true },
  { top: "46%", left: "72%", w: 120, rotate: -35, speed: -28, hide: true },
  { top: "50%", left: "89%", w: 102, rotate: 130, speed: 20, hide: true },
  { top: "68%", left: "10%", w: 108, rotate: 70, speed: 22, hide: true },
  { top: "71%", left: "27%", w: 122, rotate: -20, speed: -26, hide: true },
  { top: "66%", left: "44%", w: 98, rotate: 150, speed: 18, hide: true },
  { top: "70%", left: "61%", w: 114, rotate: 40, speed: -30, hide: true },
  { top: "67%", left: "77%", w: 105, rotate: -55, speed: 26, hide: true },
  { top: "71%", left: "93%", w: 116, rotate: 100, speed: -18, hide: true },
  { top: "88%", left: "6%", w: 112, rotate: -10, speed: -24, hide: true },
  { top: "91%", left: "23%", w: 100, rotate: 120, speed: 28, hide: true },
  { top: "86%", left: "40%", w: 120, rotate: -45, speed: -16, hide: true },
  { top: "91%", left: "57%", w: 96, rotate: 25, speed: 30, hide: true },
  { top: "87%", left: "73%", w: 110, rotate: 175, speed: -26, hide: true },
  { top: "90%", left: "90%", w: 118, rotate: 65, speed: 18, hide: true },
];

const QUICK_LINKS = [
  { label: "Game Info", href: "#featured" },
  { label: "Support Center", href: "#faq" },
  { label: "Join Discord", href: "https://discord.gg/bvgWmyPX" },
  { label: "Our Blog", href: "#" },
];

const ABOUT_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
  { label: "Game Updates", href: "#featured" },
  { label: "Contact Us", href: "#contact" },
];

const SOCIALS = [
  { label: "LinkedIn", icon: "/assets/icons/linkedin.svg", href: "#" },
  { label: "Facebook", icon: "/assets/icons/facebook.svg", href: "#" },
  { label: "YouTube", icon: "/assets/icons/youtube.svg", href: "#" },
  { label: "Discord", icon: "/assets/icons/discord.svg", href: "https://discord.gg/bvgWmyPX" },
];

function WaveText({ text }: { text: string }) {
  return (
    <span aria-hidden="true">
      {[...text].map((ch, i) => (
        <WaveChar key={i} $i={i}>
          {ch === " " ? " " : ch}
        </WaveChar>
      ))}
    </span>
  );
}

export default function Footer() {
  const scope = useRef<HTMLElement>(null);

  usePickles(scope, { origin: ".footer-inner" });

  return (
    <FooterRoot ref={scope}>
      <DecorLayer>
        <Pickles items={PICKLES} color="footerPickle" />
      </DecorLayer>

      <Inner className="footer-inner">
        <Top>
          <Brand>
            <Logo />
            <Stores>
              <StoreBadge store="android" expanded tone="onDark" />
              <StoreBadge store="ios" expanded tone="onDark" />
            </Stores>
          </Brand>

          <Col aria-label="Quick links">
            <ColTitle>Quick Links</ColTitle>
            {QUICK_LINKS.map((l) => (
              <FootLink key={l.label} href={l.href} aria-label={l.label}>
                <WaveText text={l.label} />
              </FootLink>
            ))}
          </Col>

          <Col aria-label="About us">
            <ColTitle>About Us</ColTitle>
            {ABOUT_LINKS.map((l) => (
              <FootLink key={l.label} href={l.href} aria-label={l.label}>
                <WaveText text={l.label} />
              </FootLink>
            ))}
          </Col>

          <div>
            <ColTitle>Follow us</ColTitle>
            <Socials>
              {SOCIALS.map((s) => (
                <Social
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon $src={s.icon} $size="20px" aria-hidden="true" />
                </Social>
              ))}
            </Socials>
          </div>
        </Top>

        <Bottom>
          <span>© 2025 Pickle Jar. All rights reserved.</span>
          <span>
            Designed by{" "}
            <a
              href="https://conceptstudio.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Concept Studio
            </a>
          </span>
        </Bottom>
      </Inner>
    </FooterRoot>
  );
}
