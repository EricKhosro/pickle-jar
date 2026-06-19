"use client";

import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Logo from "@/components/ui/Logo";
import ThemeToggle from "@/components/ui/ThemeToggle";

const NAV_LINKS = [
  { label: "About us", href: "#about" },
  { label: "Join us", href: "#featured" },
  { label: "Faq", href: "#faq" },
  { label: "Contact us", href: "#contact" },
] as const;

const HeaderRoot = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: ${({ theme }) => theme.zIndex.header};
  transition:
    background 0.3s ease,
    box-shadow 0.3s ease,
    backdrop-filter 0.3s ease;

  width: 100%;
  ${({ $scrolled, theme }) =>
    $scrolled &&
    css`
      background: ${theme.colors.background}f2;
      backdrop-filter: blur(10px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.18);
    `}
`;

const Inner = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  width: 100%;
  padding: 24px 32px;

  ${({ theme }) => theme.media.desktop} {
    padding: 48px 32px;
  }
`;

const DesktopNav = styled.nav`
  display: none;

  ${({ theme }) => theme.media.desktop} {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 48px;
`;

const NavLink = styled.a`
  position: relative;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 1.2px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transition: width 0.25s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  &:hover::after {
    width: 100%;
  }
`;

const MenuButton = styled.button<{ $open: boolean }>`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  align-items: center;
  z-index: ${({ theme }) => theme.zIndex.modal + 1};

  ${({ theme }) => theme.media.desktop} {
    display: none;
  }

  span {
    width: 26px;
    height: 2.5px;
    border-radius: 2px;
    background: ${({ theme }) => theme.colors.text};
    transition:
      transform 0.3s ease,
      opacity 0.2s ease;
  }

  ${({ $open }) =>
    $open &&
    css`
      span:nth-child(1) {
        transform: translateY(7.5px) rotate(45deg);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:nth-child(3) {
        transform: translateY(-7.5px) rotate(-45deg);
      }
    `}
`;

const MobileMenu = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.modal};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing["3xl"]};
  ${({ theme }) => theme.container.padding};
  background: ${({ theme }) => theme.colors.surface};
  transform: translateX(${({ $open }) => ($open ? "0" : "100%")});
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  ${({ theme }) => theme.media.desktop} {
    display: none;
  }
`;

const MobileLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <HeaderRoot $scrolled={scrolled}>
      <Inner>
        <Logo />

        <DesktopNav aria-label="Primary">
          <NavList>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <NavLink href={href}>{label}</NavLink>
              </li>
            ))}
          </NavList>
          <ThemeToggle />
        </DesktopNav>

        <MenuButton
          type="button"
          $open={open}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </MenuButton>
      </Inner>

      <MobileMenu $open={open} aria-hidden={!open}>
        {NAV_LINKS.map(({ label, href }) => (
          <MobileLink key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </MobileLink>
        ))}
        <ThemeToggle />
      </MobileMenu>
    </HeaderRoot>
  );
}
