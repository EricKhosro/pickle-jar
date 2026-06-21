import styled from "styled-components";
import { capTrim } from "../common.styles";

export const Section = styled.section`
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
  padding-block: clamp(80px, 12vw, 160px);
  padding-inline: clamp(20px, 5vw, 80px);
`;

export const Inner = styled.div`
  max-width: 920px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeights.black};
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  font-size: clamp(40px, 8vw, 96px);
  color: ${({ theme }) => theme.colors.primary};
  ${capTrim}
`;

export const List = styled.div`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing["2xl"]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Item = styled.div<{ $open: boolean }>`
  border-radius: 36px;
  overflow: hidden;
  background: ${({ theme, $open }) =>
    $open ? theme.colors.surface : theme.colors.surfaceRaised};
  transition: background ${({ theme }) => theme.transitions.base};
`;

export const Trigger = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: clamp(22px, 3vw, 34px) clamp(24px, 4vw, 56px);
  text-align: center;
  cursor: pointer;
`;

export const Q = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: clamp(18px, 2.2vw, 28px);
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Mark = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const AnswerWrap = styled.div`
  height: 0;
  overflow: hidden;
`;

export const Answer = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  padding: 0 clamp(24px, 5vw, 64px) clamp(28px, 3vw, 36px);
  max-width: 60ch;
  margin-inline: auto;
`;
