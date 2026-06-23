import styled from "styled-components";
import { capTrim, RoundedSection } from "../common.styles";

export const Section = styled(RoundedSection).attrs({
  $bg: "surface",
  $padBlock: "clamp(64px, 9vw, 120px)",
  $padInline: "clamp(20px, 5vw, 80px)",
})``;

export const Inner = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin-inline: auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(40px, 5vw, 64px);
  text-align: center;

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Num = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeights.black};
  font-size: clamp(56px, 9vw, 120px);
  line-height: 1;
  color: ${({ theme }) => theme.colors.primary};
  ${capTrim}
`;

export const Label = styled.span`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.text};
`;
