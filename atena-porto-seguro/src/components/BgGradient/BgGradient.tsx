import { StyleGradient } from "../../style/styled-cadastro";

interface BgGradientProps {
  children: React.ReactNode;
}

export default function BgGradient({children}: BgGradientProps) {
  return (
    <StyleGradient>
      <main>
        {children}
      </main>
    </StyleGradient>
  );
}