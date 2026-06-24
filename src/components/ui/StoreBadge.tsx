"use client";

import styled, { css } from "styled-components";
import { Icon } from "./Icon";
import { capTrim } from "@/components/sections/common.styles";

type Tone = "default" | "onDark";

const Badge = styled.a<{ $tone: Tone }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 72px;
  min-width: 72px;
  padding-inline: 18px;
  border-radius: 28px;
  border: 2px solid
    ${({ theme, $tone }) =>
      $tone === "onDark" ? "rgba(255, 255, 255, 0.55)" : theme.colors.border};
  color: ${({ theme, $tone }) =>
    $tone === "onDark" ? theme.colors.onFooter : theme.colors.text};
  overflow: hidden;
  white-space: nowrap;
  transition:
    border-color 0.25s ease,
    background 0.25s ease;

  &:hover {
    border-color: ${({ theme, $tone }) =>
      $tone === "onDark" ? theme.colors.onFooter : theme.colors.text};
    background: ${({ $tone }) =>
      $tone === "onDark" ? "rgba(255, 255, 255, 0.08)" : "transparent"};
  }
`;

const Label = styled.span<{ $expanded?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
  font-family: ${({ theme }) => theme.fonts.body};
  max-width: 0;
  margin-left: 0;
  opacity: 0;
  transition:
    max-width 0.8s cubic-bezier(0.16, 1, 0.3, 1),
    margin-left 0.8s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.25s ease;

  ${({ $expanded }) =>
    $expanded &&
    css`
      max-width: 220px;
      margin-left: 12px;
      opacity: 1;
    `}

  small {
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    line-height: 1.5;
    ${capTrim}
  }
  strong {
    font-size: 24px;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    line-height: 1.5;
    ${capTrim}
  }

  ${Badge}:hover & {
    max-width: 220px;
    margin-left: 12px;
    opacity: 1;
  }
`;

type StoreKey = "ios" | "android";
type StoreMeta = { top: string; bottom: string; src: string; size: string };

const STORES: Record<StoreKey, StoreMeta> = {
  ios: {
    top: "Download on the",
    bottom: "App Store",
    src: "/assets/icons/apple.svg",
    size: "48px",
  },
  android: {
    top: "Download on the",
    bottom: "Play Store",
    src: "/assets/icons/playstore.svg",
    size: "48px",
  },
};

export function StoreBadge({
  store,
  href = "#",
  expanded = false,
  tone = "default",
}: {
  store: StoreKey;
  href?: string;
  expanded?: boolean;
  tone?: Tone;
}) {
  const data = STORES[store];
  return (
    <Badge
      href={href}
      onClick={href === "#" ? (e) => e.preventDefault() : undefined}
      aria-label={`${data.top} ${data.bottom}`}
      $tone={tone}
    >
      <Icon $src={data.src} $size={data.size} aria-hidden="true" />
      <Label $expanded={expanded}>
        <small>{data.top}</small>
        <strong>{data.bottom}</strong>
      </Label>
    </Badge>
  );
}
