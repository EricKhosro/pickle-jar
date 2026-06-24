import styled from "styled-components";
import { Section as SectionBase, Heading as HeadingBase } from "../common.styles";

export const Section = styled(SectionBase).attrs({
  $bg: "background",
  $padBlock: "clamp(64px, 9vw, 120px)",
})``;

export const Inner = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin-inline: auto;
  padding-inline: clamp(20px, 5vw, 80px);
`;

export { EyebrowSmall as Eyebrow } from "../common.styles";

export const Heading = styled(HeadingBase).attrs({
  $size: "clamp(36px, 6vw, 80px)",
  $align: "left",
})`
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const Viewport = styled.div`
  margin-top: clamp(40px, 5vw, 72px);
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${({ theme }) => theme.media.tablet} {
    overflow: hidden;
  }
`;

export const Track = styled.div`
  display: flex;
  gap: clamp(20px, 2.4vw, 40px);
  width: max-content;
  padding-inline: clamp(20px, 5vw, 80px);
  will-change: transform;
`;

export const Card = styled.article`
  flex: 0 0 clamp(260px, 32vw, 400px);
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: clamp(28px, 3vw, 44px);
  border-radius: ${({ theme }) => theme.radii.xl};
  background: ${({ theme }) => theme.colors.surfaceRaised};
  color: ${({ theme }) => theme.colors.text};
`;

export const Year = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeights.black};
  font-size: clamp(40px, 4vw, 64px);
  line-height: 1;
  color: ${({ theme }) => theme.colors.primary};
`;

export const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  color: ${({ theme }) => theme.colors.textMuted};
`;
