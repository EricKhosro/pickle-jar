"use client";

import Link from "next/link";
import styled from "styled-components";
import { Icon } from "./Icon";

const LogoLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
`;

const Mark = styled(Icon)`
  width: auto;
  aspect-ratio: 247 / 56;
  height: 36px;
  ${({ theme }) => theme.media.tablet} {
    height: 40px;
  }
  ${({ theme }) => theme.media.desktop} {
    height: 56px;
  }
`;

export default function Logo({ className }: { className?: string }) {
  return (
    <LogoLink
      href="/"
      aria-label="Pickle Jar Games — home"
      className={className}
    >
      <Mark
        as="span"
        $src="/assets/logo/logo.svg"
        role="img"
        aria-label="picklejar"
      />
    </LogoLink>
  );
}
