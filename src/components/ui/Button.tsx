"use client";

import styled, { css } from "styled-components";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

export const Button = styled.button<{ $variant?: Variant; $size?: Size }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6em;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  border-radius: ${({ theme }) => theme.radii.pill};
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
          padding: 18px 36px;
          font-size: 17px;
        `
      : $size === "sm"
        ? css`
            padding: 10px 18px;
            font-size: 14px;
          `
        : css`
            padding: 14px 28px;
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
            color: ${theme.colors.text};
            border: 2px solid currentColor;
            &:hover {
              background: ${theme.colors.text};
              color: ${theme.colors.background};
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
