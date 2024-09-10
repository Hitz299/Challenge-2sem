import { StyledCabecalhoVerde, StyledVoltar } from "../../style/style-tela-inicial";
import { StyledLink } from "../../style/styledGeral";

interface CabecalhoVerdeProps
{
  titulo: string
}

export default function CabecalhoVerde({titulo}: CabecalhoVerdeProps) {
    return (
        <>
        <StyledCabecalhoVerde>
            <div>
                <nav>
            <StyledLink to = "/home"><StyledVoltar/></StyledLink>
                </nav>
            
            </div>
            <h1>{titulo}</h1>
        </StyledCabecalhoVerde>
        </>
    )
}