import { css } from "styled-components";
import { InsetProps } from "@/components/sections/types";

export const insetProps = css<InsetProps>`
  top: ${({ $top }) => $top ?? "auto"};
  left: ${({ $left }) => $left ?? "auto"};
  right: ${({ $right }) => $right ?? "auto"};
  bottom: ${({ $bottom }) => $bottom ?? "auto"};
`;
