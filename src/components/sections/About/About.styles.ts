import styled from "styled-components";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { capTrim } from "../common.styles";

export const Section = styled.section`
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 56px;
  padding-bottom: clamp(80px, 12vw, 160px);
`;

export const Intro = styled.div`
  position: relative;
  padding-block: clamp(80px, 12vw, 160px);
`;

export const Inner = styled(Container)`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Eyebrow = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: clamp(28px, 3.5vw, 40px);
  line-height: 1.2;
  letter-spacing: -0.73px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  ${capTrim}
`;

export const Heading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeights.black};
  text-transform: uppercase;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  line-height: 0.95;
  letter-spacing: 2px;
  font-size: clamp(44px, 9vw, 112px);
  max-width: 16ch;
  margin-top: ${({ theme }) => theme.spacing.lg};
  ${capTrim}
`;

export const Cta = styled(Button)`
  margin-top: 86px;
  min-width: 280px;
  padding: 16px 48px;
  gap: 10px;
  border-radius: 24px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: clamp(18px, 2vw, 24px);
  line-height: 1.6;
  letter-spacing: 0;
`;
