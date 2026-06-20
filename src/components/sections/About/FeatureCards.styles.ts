import styled from "styled-components";

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  width: min(100% - 48px, calc(3 * 603px + 2 * 24px));
  margin-inline: auto;

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.media.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.li`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xl};
  min-height: clamp(380px, 45vw, 560px);
  padding: clamp(40px, 5vw, 88px) clamp(24px, 3vw, 40px);
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radii.xl};
  text-align: left;
`;

export const Art = styled.div<{ $aspect: string }>`
  position: relative;
  width: 100%;
  aspect-ratio: ${({ $aspect }) => $aspect};
`;

export const CardTitle = styled.h3`
  margin: 0 auto;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: clamp(24px, 3vw, 40px);
  line-height: 1.2;
  letter-spacing: 1.5px;
  color: ${({ theme }) => theme.colors.text};
  max-width: 12ch;
`;
