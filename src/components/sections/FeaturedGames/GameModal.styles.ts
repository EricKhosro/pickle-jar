import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.modal};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.overlay};
  backdrop-filter: blur(6px);
`;

export const Dialog = styled.div`
  position: relative;
  width: 100%;
  max-width: 680px;
  max-height: 88vh;
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.border} transparent;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
    background-clip: padding-box;
    border: 4px solid transparent;
    border-radius: ${({ theme }) => theme.radii.pill};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primary};
    background-clip: padding-box;
  }
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  padding: clamp(24px, 4vw, 44px);
  border-radius: ${({ theme }) => theme.radii.xl};
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};

  &:focus-visible {
    outline: none;
  }
`;

export const Close = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  font-size: 24px;
  line-height: 1;
  border-radius: ${({ theme }) => theme.radii.round};
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.surface};
  transition: color 0.2s ease;

  ${({ theme }) => theme.media.canHover} {
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const ModalTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeights.black};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  color: ${({ theme }) => theme.colors.text};
`;

export const ModalTag = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export const ModalDesc = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
`;

export const Stats = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  b {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.colors.primary};
  }

  span {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export const ScreenshotsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};

  ${({ theme }) => theme.media.belowTablet} {
    display: none;
  }
`;

export const SectionLabel = styled.h4`
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const Gallery = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Shot = styled.button`
  position: relative;
  flex: 0 0 auto;
  width: 130px;
  aspect-ratio: 9 / 16;
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
  cursor: pointer;
  scroll-snap-align: start;

  & img {
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  ${({ theme }) => theme.media.canHover} {
    &:hover img {
      transform: scale(1.06);
    }
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const Lightbox = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.modal + 50};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(16px, 4vw, 56px);
  background: rgba(6, 6, 20, 0.88);
  backdrop-filter: blur(10px);
`;

export const LightFigure = styled.div`
  position: relative;
  width: min(92vw, 520px);
  height: min(86vh, 1000px);

  & img {
    object-fit: contain;
  }
`;

export const LightClose = styled.button`
  position: absolute;
  top: clamp(12px, 3vw, 28px);
  right: clamp(12px, 3vw, 28px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  font-size: 26px;
  line-height: 1;
  border-radius: ${({ theme }) => theme.radii.round};
  color: ${({ theme }) => theme.colors.text};
  background: rgba(255, 255, 255, 0.12);
  transition: background 0.2s ease;

  ${({ theme }) => theme.media.canHover} {
    &:hover {
      background: rgba(255, 255, 255, 0.24);
    }
  }
`;

export const LightNav = styled.button<{ $side: "left" | "right" }>`
  position: absolute;
  top: 50%;
  ${({ $side }) => ($side === "left" ? "left" : "right")}: clamp(8px, 3vw, 32px);
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  font-size: 30px;
  line-height: 1;
  border-radius: ${({ theme }) => theme.radii.round};
  color: ${({ theme }) => theme.colors.onPrimary};
  background: ${({ theme }) => theme.colors.primary};
  transition:
    background 0.2s ease,
    transform 0.2s ease;

  ${({ theme }) => theme.media.canHover} {
    &:hover {
      background: ${({ theme }) => theme.colors.primaryHover};
      transform: translateY(-50%) scale(1.08);
    }
  }
`;

export const StoreLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const StoreLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: 12px 22px;
  border-radius: ${({ theme }) => theme.radii.pill};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.onPrimary};
  background: ${({ theme }) => theme.colors.primary};
  transition:
    transform 0.2s ease,
    background 0.2s ease;

  ${({ theme }) => theme.media.canHover} {
    &:hover {
      background: ${({ theme }) => theme.colors.primaryHover};
      transform: translateY(-2px);
    }
  }
`;
