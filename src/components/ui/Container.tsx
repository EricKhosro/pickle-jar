"use client";

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin-inline: auto;
  padding-inline: ${({ theme }) => theme.container.padding};
`;
