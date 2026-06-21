import styled from "styled-components";
import Link from "next/link";

export const FooterRoot = styled.footer`
  position: relative;
  z-index: 0;
  background: ${({ theme }) => theme.colors.footer};
  color: ${({ theme }) => theme.colors.onFooter};
  margin-top: -72px;
  padding: clamp(120px, 12vw, 180px) clamp(24px, 6vw, 96px)
    clamp(36px, 4vw, 56px);
`;

export const Inner = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin-inline: auto;
`;

export const Top = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(40px, 5vw, 72px);

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: 1.6fr 1fr 1fr 1fr;
  }
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.xl};
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
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const FootLink = styled(Link)`
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  opacity: 0.92;
  width: fit-content;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
    text-decoration: underline;
    text-underline-offset: 4px;
  }
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
  border: 2px solid rgba(255, 255, 255, 0.45);
  color: ${({ theme }) => theme.colors.onFooter};
  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.onFooter};
    color: ${({ theme }) => theme.colors.footer};
    transform: translateY(-3px);
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: clamp(48px, 6vw, 88px);
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  font-size: ${({ theme }) => theme.fontSizes.sm};
  opacity: 0.92;

  a {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;
