"use client";

import styled, { css } from "styled-components";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

export const Button = styled.button<{ $variant?: Variant; $size?: Size }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  border-radius: 24px;
  white-space: nowrap;
  cursor: pointer;
  transition:
    transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
    background 0.25s ease,
    color 0.25s ease,
    border-color 0.25s ease;

  ${({ $size = "md" }) =>
    $size === "lg"
      ? css`
          padding: 16px 48px;
          font-size: clamp(18px, 2vw, 24px);
          line-height: 1.6;
        `
      : $size === "sm"
        ? css`
            padding: 10px 18px;
            font-size: 14px;
          `
        : css`
            padding: 12px 24px;
            font-size: 16px;
          `}

  ${({ $variant = "primary", theme }) =>
    $variant === "primary"
      ? css`
          background: ${theme.colors.primary};
          color: ${theme.colors.onPrimary};
          &:hover {
            background: ${theme.colors.primaryHover};
            transform: translateY(-2px);
          }
        `
      : $variant === "outline"
        ? css`
            background: transparent;
            color: ${theme.colors.primary};
            box-shadow: inset 0 0 0 2px ${theme.colors.primary};
            &:hover {
              background: ${theme.colors.primary};
              color: ${theme.colors.onPrimary};
            }
          `
        : css`
            background: transparent;
            color: ${theme.colors.text};
            &:hover {
              color: ${theme.colors.primary};
            }
          `}

  &:active {
    transform: scale(0.97);
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;
