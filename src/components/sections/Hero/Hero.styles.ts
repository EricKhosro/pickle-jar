import styled from "styled-components";
import { Container } from "@/components/ui/Container";

export const Section = styled.section`
  visibility: hidden;
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-block: 140px ${({ theme }) => theme.spacing["3xl"]};
  background: ${({ theme }) => theme.colors.background};
`;

export const BlobLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
`;

export const Deco = styled.span`
  position: absolute;
  will-change: transform;
  -webkit-mask: url("/assets/illustrations/pickle.svg") no-repeat center /
    contain;
  mask: url("/assets/illustrations/pickle.svg") no-repeat center / contain;
`;

export const JarWrap = styled.span`
  position: absolute;
  left: 50%;
  top: 78%;
  width: clamp(280px, 37vw, 701px);
  aspect-ratio: 702 / 790;
  will-change: transform;
`;

export const Jar = styled.span`
  display: block;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.surfaceRaised};
  -webkit-mask: url("/assets/illustrations/jar.svg") no-repeat center / contain;
  mask: url("/assets/illustrations/jar.svg") no-repeat center / contain;
`;

export const Content = styled(Container)`
  position: relative;
  z-index: 1;
  text-align: center;
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

  .hero-line {
    display: block;
    ${({ theme }) => theme.media.tablet} {
      white-space: nowrap;
    }
  }
`;

export const BottomBar = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 56px;
  z-index: 1;
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.lg};
  padding-inline: 32px;
  flex-wrap: wrap;
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
  color: ${({ theme }) => theme.colors.text};
  position: relative;
`;
