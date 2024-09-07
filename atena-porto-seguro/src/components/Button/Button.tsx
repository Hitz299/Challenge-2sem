import { StyledButton } from "../../style/styledGeral";

interface ButtonProps
{
  titulo: string
  click: () => void;
}

export default function Button({titulo, click}:ButtonProps) {
  return (
    <>
        <StyledButton onClick={click}>
            {titulo}
        </StyledButton>
    </>
  )
}
