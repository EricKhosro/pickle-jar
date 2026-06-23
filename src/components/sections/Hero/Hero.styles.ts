import styled, { keyframes } from "styled-components";
import { Container } from "@/components/ui/Container";
import { capTrim } from "@/components/sections/common.styles";

const lineUp = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Section = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-block: 140px ${({ theme }) => theme.spacing["3xl"]};
  background: ${({ theme }) => theme.colors.background};
`;

export const Content = styled(Container)`
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: none;
  padding-inline: ${({ theme }) => theme.container.padding};
`;

export const Heading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeights.black};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 0.95;
  letter-spacing: 2px;
  font-size: clamp(52px, 9vw, 160px);

  .line-mask {
    display: block;
    overflow: hidden;
    padding-block: 0.06em;
    margin-block: -0.06em;
  }

  .hero-line {
    display: block;
    ${capTrim}
    animation: ${lineUp} 1.1s cubic-bezier(0.16, 1, 0.3, 1) both;

    ${({ theme }) => theme.media.tablet} {
      white-space: nowrap;
    }
  }

  .line-mask:nth-child(1) .hero-line {
    animation-delay: 0.05s;
  }
  .line-mask:nth-child(2) .hero-line {
    animation-delay: 0.19s;
  }
  .line-mask:nth-child(3) .hero-line {
    animation-delay: 0.33s;
  }

  ${({ theme }) => theme.media.reducedMotion} {
    .hero-line {
      animation: none;
    }
  }
`;

export const BottomBar = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 56px;
  z-index: 1;
  display: none;
  align-items: end;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.lg};
  padding-inline: 32px;
  flex-wrap: wrap;

  ${({ theme }) => theme.media.tablet} {
    display: flex;
  }

  .hero-fade {
    animation: ${fadeUp} 0.7s ease-out both;
  }
  .hero-fade:nth-child(1) {
    animation-delay: 0.45s;
  }
  .hero-fade:nth-child(2) {
    animation-delay: 0.55s;
  }

  ${({ theme }) => theme.media.reducedMotion} {
    .hero-fade {
      animation: none;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
`;

export const ExploreMore = styled.a`
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.5;
  letter-spacing: 0;
  color: ${({ theme }) => theme.colors.text};
  position: relative;
`;
