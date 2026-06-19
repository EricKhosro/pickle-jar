import styled from "styled-components";
import { Container } from "@/components/ui/Container";

export const Section = styled.section`
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
  padding-block: clamp(80px, 12vw, 160px);
`;

export const Inner = styled(Container)`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const Eyebrow = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.text};
`;

export const Heading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeights.black};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};
  line-height: 0.95;
  letter-spacing: 1px;
  font-size: clamp(40px, 7vw, 96px);
  max-width: 16ch;
`;
