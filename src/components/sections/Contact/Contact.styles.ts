import styled from "styled-components";
import { brand } from "@/styles/theme";
import { Button } from "@/components/ui/Button";
import { Section as SectionBase, Heading as HeadingBase } from "../common.styles";

export const SubmitButton = styled(Button)`
  &:hover {
    transform: rotate(-3deg);
  }

  &:active {
    transform: rotate(-3deg) scale(0.96);
  }
`;

export const Section = styled(SectionBase)`
  z-index: 1;
  background: ${brand.indigo};
  color: ${brand.white};
  border-radius: clamp(40px, 6vw, 72px);
  padding-block: clamp(80px, 12vw, 160px) clamp(120px, 14vw, 200px);
  padding-inline: clamp(20px, 5vw, 80px);
`;

export const Inner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1180px;
  margin-inline: auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(40px, 5vw, 80px);
  align-items: start;

  ${({ theme }) => theme.media.desktop} {
    grid-template-columns: 0.85fr 1.15fr;
  }
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const Eyebrow = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${brand.orange};
`;

export const Heading = styled(HeadingBase).attrs({
  $color: "primary",
  $size: "clamp(40px, 6vw, 80px)",
  $align: "left",
})``;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(20px, 2.4vw, 32px);

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Field = styled.div<{ $full?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  ${({ $full }) => $full && "grid-column: 1 / -1;"}
`;

export const Label = styled.label`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.md};
  letter-spacing: 0.2px;
  color: rgba(255, 255, 255, 0.88);
`;

export const Req = styled.span`
  color: ${brand.orange};
`;

const fieldBase = `
  width: 100%;
  border-radius: 999px;
  padding: 16px 24px;
  font: inherit;
  color: ${brand.white};
  background: rgba(255, 255, 255, 0.07);
  transition: border-color 0.2s ease, background 0.2s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus-visible {
    outline: none;
    border-color: ${brand.orange};
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const Input = styled.input<{ $invalid?: boolean }>`
  ${fieldBase}
  border: 2px solid
    ${({ $invalid }) =>
      $invalid ? brand.orange : "rgba(255, 255, 255, 0.16)"};
`;

export const Textarea = styled.textarea<{ $invalid?: boolean }>`
  ${fieldBase}
  border-radius: 28px;
  min-height: 150px;
  resize: vertical;
  border: 2px solid
    ${({ $invalid }) =>
      $invalid ? brand.orange : "rgba(255, 255, 255, 0.16)"};
`;

export const ErrorText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${brand.orange};
`;

export const SubmitRow = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const Consent = styled.label`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  max-width: 38ch;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: rgba(255, 255, 255, 0.78);
  cursor: pointer;

  a {
    color: ${brand.white};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;

export const Checkbox = styled.input<{ $invalid?: boolean }>`
  appearance: none;
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  margin-top: 2px;
  border-radius: 7px;
  border: 2px solid
    ${({ $invalid }) =>
      $invalid ? brand.orange : "rgba(255, 255, 255, 0.4)"};
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;

  &:checked {
    background: ${brand.orange} url("/assets/icons/check.svg") no-repeat center /
      14px;
    border-color: ${brand.orange};
  }
`;

export const Status = styled.p<{ $error?: boolean }>`
  grid-column: 1 / -1;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ $error }) => ($error ? brand.orange : brand.white)};
`;

export const Newsletter = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const NewsletterTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${brand.white};
`;

export const NewsletterText = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: rgba(255, 255, 255, 0.72);
`;

export const NewsletterRow = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.xs};

  @media (min-width: 460px) {
    flex-direction: row;
  }
`;

export const NewsletterInput = styled.input<{ $invalid?: boolean }>`
  flex: 1;
  border-radius: 999px;
  padding: 14px 22px;
  font: inherit;
  color: ${brand.white};
  background: rgba(255, 255, 255, 0.07);
  border: 2px solid
    ${({ $invalid }) =>
      $invalid ? brand.orange : "rgba(255, 255, 255, 0.16)"};

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus-visible {
    outline: none;
    border-color: ${brand.orange};
  }
`;
