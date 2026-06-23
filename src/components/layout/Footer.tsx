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
  { top: "4%", left: "2%", w: 84, rotate: -180, speed: 12, hide: true },
  { top: "6%", left: "8%", w: 97, rotate: -133, speed: -19, hide: true },
  { top: "8%", left: "15%", w: 89, rotate: -86, speed: 26, hide: true },
  { top: "4%", left: "21%", w: 102, rotate: -39, speed: -33, hide: true },
  { top: "6%", left: "28%", w: 94, rotate: 8, speed: 16, hide: true },
  { top: "8%", left: "34%", w: 86, rotate: 55, speed: -23, hide: true },
  { top: "4%", left: "41%", w: 99, rotate: 102, speed: 30, hide: true },
  { top: "6%", left: "47%", w: 91, rotate: 149, speed: -13, hide: true },
  { top: "8%", left: "54%", w: 104, rotate: -164, speed: 20, hide: true },
  { top: "4%", left: "60%", w: 96, rotate: -117, speed: -27, hide: true },
  { top: "6%", left: "67%", w: 88, rotate: -70, speed: 34, hide: true },
  { top: "8%", left: "73%", w: 101, rotate: -23, speed: -17, hide: true },
  { top: "4%", left: "80%", w: 93, rotate: 24, speed: 24, hide: true },
  { top: "6%", left: "86%", w: 85, rotate: 71, speed: -31, hide: true },
  { top: "8%", left: "92%", w: 98, rotate: 118, speed: 14, hide: true },
  { top: "28%", left: "5%", w: 90, rotate: 165, speed: -21, hide: true },
  { top: "30%", left: "11%", w: 103, rotate: -148, speed: 28, hide: true },
  { top: "32%", left: "18%", w: 95, rotate: -101, speed: -35, hide: true },
  { top: "28%", left: "24%", w: 87, rotate: -54, speed: 18, hide: true },
  { top: "30%", left: "31%", w: 100, rotate: -7, speed: -25, hide: true },
  { top: "32%", left: "37%", w: 92, rotate: 40, speed: 32, hide: true },
  { top: "28%", left: "44%", w: 84, rotate: 87, speed: -15, hide: true },
  { top: "30%", left: "50%", w: 97, rotate: 134, speed: 22, hide: true },
  { top: "32%", left: "57%", w: 89, rotate: -179, speed: -29, hide: true },
  { top: "28%", left: "63%", w: 102, rotate: -132, speed: 12, hide: true },
  { top: "30%", left: "70%", w: 94, rotate: -85, speed: -19, hide: true },
  { top: "32%", left: "76%", w: 86, rotate: -38, speed: 26, hide: true },
  { top: "28%", left: "83%", w: 99, rotate: 9, speed: -33, hide: true },
  { top: "30%", left: "89%", w: 91, rotate: 56, speed: 16, hide: true },
  { top: "32%", left: "93%", w: 104, rotate: 103, speed: -23, hide: true },
  { top: "52%", left: "2%", w: 96, rotate: 150, speed: 30, hide: true },
  { top: "54%", left: "8%", w: 88, rotate: -163, speed: -13, hide: true },
  { top: "56%", left: "15%", w: 101, rotate: -116, speed: 20, hide: true },
  { top: "52%", left: "21%", w: 93, rotate: -69, speed: -27, hide: true },
  { top: "54%", left: "28%", w: 85, rotate: -22, speed: 34, hide: true },
  { top: "56%", left: "34%", w: 98, rotate: 25, speed: -17, hide: true },
  { top: "52%", left: "41%", w: 90, rotate: 72, speed: 24, hide: true },
  { top: "54%", left: "47%", w: 103, rotate: 119, speed: -31, hide: true },
  { top: "56%", left: "54%", w: 95, rotate: 166, speed: 14, hide: true },
  { top: "52%", left: "60%", w: 87, rotate: -147, speed: -21, hide: true },
  { top: "54%", left: "67%", w: 100, rotate: -100, speed: 28, hide: true },
  { top: "56%", left: "73%", w: 92, rotate: -53, speed: -35, hide: true },
  { top: "52%", left: "80%", w: 84, rotate: -6, speed: 18, hide: true },
  { top: "54%", left: "86%", w: 97, rotate: 41, speed: -25, hide: true },
  { top: "56%", left: "92%", w: 89, rotate: 88, speed: 32, hide: true },
  { top: "76%", left: "5%", w: 102, rotate: 135, speed: -15, hide: true },
  { top: "78%", left: "11%", w: 94, rotate: -178, speed: 22, hide: true },
  { top: "80%", left: "18%", w: 86, rotate: -131, speed: -29, hide: true },
  { top: "76%", left: "24%", w: 99, rotate: -84, speed: 12, hide: true },
  { top: "78%", left: "31%", w: 91, rotate: -37, speed: -19, hide: true },
  { top: "80%", left: "37%", w: 104, rotate: 10, speed: 26, hide: true },
  { top: "76%", left: "44%", w: 96, rotate: 57, speed: -33, hide: true },
  { top: "78%", left: "50%", w: 88, rotate: 104, speed: 16, hide: true },
  { top: "80%", left: "57%", w: 101, rotate: 151, speed: -23, hide: true },
  { top: "76%", left: "63%", w: 93, rotate: -162, speed: 30, hide: true },
  { top: "78%", left: "70%", w: 85, rotate: -115, speed: -13, hide: true },
  { top: "80%", left: "76%", w: 98, rotate: -68, speed: 20, hide: true },
  { top: "76%", left: "83%", w: 90, rotate: -21, speed: -27, hide: true },
  { top: "78%", left: "89%", w: 103, rotate: 26, speed: 34, hide: true },
  { top: "80%", left: "93%", w: 95, rotate: 73, speed: -17, hide: true },
];

const QUICK_LINKS = [
  { label: "Game Info", href: "#featured" },
  { label: "Support Center", href: "#faq" },
  { label: "Join Discord", href: "https://discord.gg/bvgWmyPX" },
  { label: "Our Blog", href: "#" },
];

const ABOUT_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "/terms-of-use" },
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
