import styled, { css } from "styled-components";
import Link from "next/link";

export const WaveChar = styled.span<{ $i: number }>`
  display: inline-block;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: ${({ $i }) => $i * 0.03}s;
`;

const waveOnHover = css`
  &:hover ${WaveChar} {
    transform: translateY(-6px) rotate(-8deg);
  }
  &:hover ${WaveChar}:nth-child(even) {
    transform: translateY(6px) rotate(8deg);
  }
`;

export const FooterRoot = styled.footer`
  position: relative;
  z-index: 0;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.footer};
  color: ${({ theme }) => theme.colors.onFooter};
  margin-top: -72px;
  padding: clamp(120px, 12vw, 180px) clamp(24px, 6vw, 96px)
    clamp(36px, 4vw, 56px);
`;

export const Inner = styled.div`
  position: relative;
  z-index: 1;
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin-inline: auto;
`;

export const Top = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(40px, 5vw, 56px);
  align-items: stretch;

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1160px) {
    grid-template-columns: 1.7fr 1fr 1fr 1fr;
  }
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: clamp(40px, 6vw, 96px);
`;

export const Stores = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Col = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const ColTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: 1.5;
  letter-spacing: 0;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const FootLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.5;
  letter-spacing: 0;
  width: fit-content;
  white-space: nowrap;

  ${waveOnHover}
`;

export const Socials = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Social = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: ${({ theme }) => theme.radii.round};
  border: 2px solid rgba(255, 255, 255, 0.55);
  color: ${({ theme }) => theme.colors.onFooter};
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-3px);
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: clamp(56px, 7vw, 104px);
  font-size: ${({ theme }) => theme.fontSizes.sm};
  opacity: 0.92;

  a {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;
