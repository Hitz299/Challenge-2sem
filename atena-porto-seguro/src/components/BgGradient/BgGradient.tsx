import { ReactNode } from "react";
import { StyleGradient } from "../../style/styled-cadastro";

interface BgGradientProps {
  children: ReactNode;
}

export default function BgGradient({children}: BgGradientProps) {
  return (
    <StyleGradient>
      {children}
    </StyleGradient>
  );
}