import { StyledCentraliza, StyledTexto } from "../../style/styledGeral";

interface TextoInformativoProps
{
    texto: string;
}

export default function TextoInformativo({texto}: TextoInformativoProps) {
  return (
    <>
    
        <StyledCentraliza>

            <StyledTexto>{texto}</StyledTexto>

        </StyledCentraliza>
    
    </>
  )
}
