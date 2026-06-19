"use client";

import styled from "styled-components";
import { Icon } from "./Icon";

const Badge = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 72px;
  min-width: 72px;
  padding-inline: 18px;
  border-radius: 28px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  overflow: hidden;
  white-space: nowrap;
  transition: border-color 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.text};
  }
`;

const Label = styled.span`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-family: ${({ theme }) => theme.fonts.body};
  max-width: 0;
  margin-left: 0;
  opacity: 0;
  transition:
    max-width 0.8s cubic-bezier(0.16, 1, 0.3, 1),
    margin-left 0.8s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.25s ease;

  small {
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    line-height: 1.5;
  }
  strong {
    font-size: 24px;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    line-height: 1.5;
  }

  ${Badge}:hover & {
    max-width: 220px;
    margin-left: 12px;
    opacity: 1;
  }
`;

const STORES = {
  ios: {
    top: "Download on the",
    bottom: "App Store",
    src: "/assets/icons/apple.svg",
    size: "34px",
  },
  android: {
    top: "GET IT ON",
    bottom: "Google Play",
    src: "/assets/icons/playstore.svg",
    size: "28px",
  },
} as const;

export function StoreBadge({
  store,
  href = "#",
}: {
  store: keyof typeof STORES;
  href?: string;
}) {
  const data = STORES[store];
  return (
    <Badge href={href} aria-label={`${data.top} ${data.bottom}`}>
      <Icon $src={data.src} $size={data.size} aria-hidden="true" />
      <Label>
        <small>{data.top}</small>
        <strong>{data.bottom}</strong>
      </Label>
    </Badge>
  );
}
