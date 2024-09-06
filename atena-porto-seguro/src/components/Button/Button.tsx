import { StyledButton } from "../../style/styledGeral";

interface ButtonProps
{
  titulo: string
}

export default function Button({titulo}:ButtonProps) {
  return (
    <>
        <StyledButton>
            {titulo}
        </StyledButton>
    </>
  )
}
