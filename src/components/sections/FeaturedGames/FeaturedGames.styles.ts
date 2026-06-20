import styled from "styled-components";
import { Container } from "@/components/ui/Container";
import { capTrim } from "../common.styles";

export const Section = styled.section`
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
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
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: clamp(28px, 3.5vw, 40px);
  line-height: 1.2;
  letter-spacing: -0.73px;
  color: ${({ theme }) => theme.colors.text};
  ${capTrim}
`;

export const Heading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeights.black};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 0.95;
  letter-spacing: 2px;
  font-size: clamp(40px, 8vw, 104px);
  max-width: 12ch;
  ${capTrim}
`;

