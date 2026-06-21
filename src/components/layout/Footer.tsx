"use client";

import Logo from "@/components/ui/Logo";
import { StoreBadge } from "@/components/ui/StoreBadge";
import { Icon } from "@/components/ui/Icon";
import {
  FooterRoot,
  Inner,
  Top,
  Brand,
  Stores,
  Col,
  ColTitle,
  FootLink,
  Socials,
  Social,
  Bottom,
} from "./Footer.styles";

const QUICK_LINKS = [
  { label: "Game Info", href: "#featured" },
  { label: "Support Center", href: "#faq" },
  { label: "Join Discord", href: "#" },
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
  { label: "Discord", icon: "/assets/icons/discord.svg", href: "#" },
];

export default function Footer() {
  return (
    <FooterRoot>
      <Inner>
        <Top>
          <Brand>
            <Logo />
            <Stores>
              <StoreBadge store="android" expanded />
              <StoreBadge store="ios" expanded />
            </Stores>
          </Brand>

          <Col aria-label="Quick links">
            <ColTitle>Quick Links</ColTitle>
            {QUICK_LINKS.map((l) => (
              <FootLink key={l.label} href={l.href}>
                {l.label}
              </FootLink>
            ))}
          </Col>

          <Col aria-label="About us">
            <ColTitle>About Us</ColTitle>
            {ABOUT_LINKS.map((l) => (
              <FootLink key={l.label} href={l.href}>
                {l.label}
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
            <a href="#" rel="noopener noreferrer">
              Concept Studio
            </a>
          </span>
        </Bottom>
      </Inner>
    </FooterRoot>
  );
}
