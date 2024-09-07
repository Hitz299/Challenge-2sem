import { StyledGradient } from "../../style/styled-cadastro";

interface BgGradientProps {
  children: React.ReactNode;
}

export default function BgGradient({children}: BgGradientProps) {
  return (
    <StyledGradient>
      <main>
        {children}
      </main>
    </StyledGradient>
  );
}