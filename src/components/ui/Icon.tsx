"use client";

import styled from "styled-components";

export const Icon = styled.span<{ $src: string; $size?: string }>`
  display: inline-block;
  flex-shrink: 0;
  width: ${({ $size }) => $size ?? "24px"};
  height: ${({ $size }) => $size ?? "24px"};
  background-color: currentColor;
  -webkit-mask: url(${({ $src }) => $src}) no-repeat center / contain;
  mask: url(${({ $src }) => $src}) no-repeat center / contain;
`;
