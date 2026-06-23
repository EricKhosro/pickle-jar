export const breakpoints = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  wide: 1440,
} as const;

export const media = {
  tablet: `@media (min-width: ${breakpoints.tablet}px)`,
  desktop: `@media (min-width: ${breakpoints.desktop}px)`,
  wide: `@media (min-width: ${breakpoints.wide}px)`,
  belowTablet: `@media (max-width: ${breakpoints.tablet - 1}px)`,
  belowDesktop: `@media (max-width: ${breakpoints.desktop - 1}px)`,
  reducedMotion: "@media (prefers-reduced-motion: reduce)",
} as const;

const shared = {
  breakpoints,
  media,
  fonts: {
    display: "var(--font-sans), system-ui, -apple-system, sans-serif",
    heading: "var(--font-sans), system-ui, -apple-system, sans-serif",
    body: "var(--font-sans), system-ui, -apple-system, sans-serif",
    serif: "var(--font-serif), Georgia, 'Times New Roman', serif",
  },
  fontSizes: {
    xs: "clamp(12px, 11px + 0.2vw, 14px)",
    sm: "clamp(14px, 13px + 0.25vw, 16px)",
    md: "clamp(16px, 15px + 0.3vw, 18px)",
    lg: "clamp(20px, 18px + 0.6vw, 24px)",
    xl: "clamp(24px, 21px + 1vw, 32px)",
    "2xl": "clamp(32px, 26px + 2vw, 48px)",
    "3xl": "clamp(40px, 29px + 3.5vw, 72px)",
    "4xl": "clamp(48px, 32px + 5vw, 96px)",
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
  lineHeights: { tight: 1.1, snug: 1.25, normal: 1.5, relaxed: 1.7 },
  letterSpacings: { tight: "-0.02em", normal: "0", wide: "0.04em" },
  radii: {
    sm: "6px",
    md: "12px",
    lg: "20px",
    xl: "28px",
    pill: "999px",
    round: "50%",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "40px",
    "2xl": "64px",
    "3xl": "96px",
    "4xl": "140px",
  },
  container: {
    maxWidth: "1280px",
    padding: "clamp(20px, 5vw, 80px)",
  },
  transitions: {
    fast: "0.2s ease",
    base: "0.3s ease",
    slow: "0.6s cubic-bezier(0.16, 1, 0.3, 1)",
  },
  zIndex: {
    base: 1,
    header: 100,
    overlay: 900,
    modal: 1000,
    cursor: 9999,
  },
} as const;

export const brand = {
  orange: "#fd6721",
  orangeHover: "#e85614",
  indigoDarkest: "#26286e",
  indigo: "#3c3ca9",
  indigoLight: "#5255c3",
  white: "#ffffff",
};

export const darkTheme = {
  mode: "dark",
  ...shared,
  colors: {
    background: brand.indigoDarkest,
    backgroundDeep: brand.indigoDarkest,
    surface: brand.indigo,
    surfaceRaised: brand.indigoLight,
    card: brand.indigoDarkest,
    text: brand.white,
    textMuted: "rgba(255, 255, 255, 0.72)",
    primary: brand.orange,
    primaryHover: brand.orangeHover,
    onPrimary: brand.indigoDarkest,
    accent: brand.indigoLight,
    border: "rgba(255, 255, 255, 0.2)",
    overlay: "rgba(38, 40, 114, 0.72)",
    footer: brand.orange,
    onFooter: brand.white,
    footerPickle: "#F7611B",
  },
};

export const lightTheme = {
  mode: "light",
  ...shared,
  colors: {
    background: "#f4f3ff",
    backgroundDeep: "#e6e3ff",
    surface: "#ffffff",
    surfaceRaised: "#ece9ff",
    card: "#ffffff",
    text: brand.indigo,
    textMuted: "rgba(60, 60, 169, 0.7)",
    primary: brand.orange,
    primaryHover: brand.orangeHover,
    onPrimary: brand.white,
    accent: brand.indigo,
    border: "rgba(60, 60, 169, 0.14)",
    overlay: "rgba(60, 60, 169, 0.5)",
    footer: brand.orange,
    onFooter: brand.white,
    footerPickle: "#F7611B",
  },
};

export type Theme = typeof darkTheme;
