"use client";

import styled from "styled-components";
import Link from "next/link";
import {
  Section,
  Eyebrow as EyebrowBase,
} from "@/components/sections/common.styles";

export const Page = styled(Section)`
  z-index: 1;
  border-bottom-left-radius: clamp(40px, 6vw, 72px);
  border-bottom-right-radius: clamp(40px, 6vw, 72px);
`;

export const Inner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 820px;
  margin-inline: auto;
`;

export const Back = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  transition: color 0.2s ease;

  ${({ theme }) => theme.media.canHover} {
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Eyebrow = styled(EyebrowBase)`
  margin-top: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  text-align: left;
`;

export const Updated = styled.p`
  margin-top: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const Intro = styled.p`
  margin-top: ${({ theme }) => theme.spacing.xl};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const Block = styled.section`
  margin-top: clamp(40px, 5vw, 64px);
`;

export const SubHeading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: clamp(20px, 2.4vw, 26px);
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.text};
`;

export const Text = styled.p`
  margin-top: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  color: ${({ theme }) => theme.colors.textMuted};

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
  }
`;
