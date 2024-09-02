import { StyleButton } from "../../style/styledGeral";

interface ButtonProps
{
  titulo: string
}

export default function Button({titulo}:ButtonProps) {
  return (
    <>
        <StyleButton>
            {titulo}
        </StyleButton>
    </>
  )
}
