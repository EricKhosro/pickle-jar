"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html {
    -webkit-text-size-adjust: 100%;
    scroll-behavior: smooth;
  }

  ${({ theme }) => theme.media.reducedMotion} {
    html {
      scroll-behavior: auto;
    }
    *,
    *::before,
    *::after {
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.001ms !important;
      scroll-behavior: auto !important;
    }
  }

  :root {
    --blob-indigoLight: ${({ theme }) => theme.colors.surfaceRaised};
    --blob-orange: ${({ theme }) => theme.colors.primary};
  }

  body {
    min-height: 100vh;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: ${({ theme }) => theme.lineHeights.normal};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    transition: background-color ${({ theme }) => theme.transitions.base},
      color ${({ theme }) => theme.transitions.base};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    line-height: ${({ theme }) => theme.lineHeights.tight};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  button, input, textarea, select {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
  }

  ul, ol {
    list-style: none;
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

export default GlobalStyles;
