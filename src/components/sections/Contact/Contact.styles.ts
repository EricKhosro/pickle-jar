import styled from "styled-components";
import { capTrim } from "../common.styles";

export const Section = styled.section`
  position: relative;
  z-index: 1;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
  border-bottom-left-radius: clamp(40px, 6vw, 72px);
  border-bottom-right-radius: clamp(40px, 6vw, 72px);
  padding-block: clamp(80px, 12vw, 160px) clamp(120px, 14vw, 200px);
  padding-inline: clamp(20px, 5vw, 80px);
`;

export const Inner = styled.div`
  max-width: 1100px;
  margin-inline: auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(40px, 5vw, 72px);
  align-items: start;

  ${({ theme }) => theme.media.desktop} {
    grid-template-columns: 1.2fr 1fr;
  }
`;

export const Eyebrow = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.primary};
`;

export const Heading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeights.black};
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 0.95;
  font-size: clamp(36px, 6vw, 80px);
  color: ${({ theme }) => theme.colors.text};
  margin-top: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  ${capTrim}
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: clamp(28px, 4vw, 48px);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const Label = styled.label`
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
`;

const fieldBase = `
  width: 100%;
  border-radius: 16px;
  padding: 14px 18px;
  font: inherit;
`;

export const Input = styled.input<{ $invalid?: boolean }>`
  ${fieldBase}
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border: 2px solid
    ${({ theme, $invalid }) =>
      $invalid ? theme.colors.primary : theme.colors.border};
  transition: border-color 0.2s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }

  &:focus-visible {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Textarea = styled.textarea<{ $invalid?: boolean }>`
  ${fieldBase}
  min-height: 140px;
  resize: vertical;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border: 2px solid
    ${({ theme, $invalid }) =>
      $invalid ? theme.colors.primary : theme.colors.border};
  transition: border-color 0.2s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }

  &:focus-visible {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ErrorText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.primary};
`;

export const Status = styled.p<{ $error?: boolean }>`
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme, $error }) =>
    $error ? theme.colors.primary : theme.colors.text};
`;

export const NewsletterCard = styled(Card)`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.onPrimary};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const NewsletterTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeights.black};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
`;

export const NewsletterRow = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (min-width: 460px) {
    flex-direction: row;
  }
`;

export const NewsletterInput = styled.input<{ $invalid?: boolean }>`
  flex: 1;
  border-radius: ${({ theme }) => theme.radii.pill};
  padding: 14px 22px;
  font: inherit;
  background: ${({ theme }) => theme.colors.onPrimary};
  color: ${({ theme }) => theme.colors.text};
  border: 2px solid
    ${({ theme, $invalid }) =>
      $invalid ? theme.colors.backgroundDeep : "transparent"};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }

  &:focus-visible {
    outline: none;
    border-color: ${({ theme }) => theme.colors.backgroundDeep};
  }
`;
