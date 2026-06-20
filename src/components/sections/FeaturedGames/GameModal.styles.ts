import styled from "styled-components";

type Accent = "primary" | "surfaceRaised" | "accent";

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
  max-width: 460px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: clamp(32px, 5vw, 56px);
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

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ModalIcon = styled.span<{ $accent: Accent }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: ${({ theme }) => theme.radii.round};
  color: ${({ theme }) => theme.colors.onPrimary};
  background: ${({ theme, $accent }) => theme.colors[$accent]};
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
  margin-top: ${({ theme }) => theme.spacing.sm};
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
