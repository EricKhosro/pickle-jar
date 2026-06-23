import styled from "styled-components";
import { Container } from "@/components/ui/Container";
import { capTrim } from "@/components/sections/common.styles";

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
  display: none;
  align-items: end;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.lg};
  padding-inline: 32px;
  flex-wrap: wrap;

  ${({ theme }) => theme.media.tablet} {
    display: flex;
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
