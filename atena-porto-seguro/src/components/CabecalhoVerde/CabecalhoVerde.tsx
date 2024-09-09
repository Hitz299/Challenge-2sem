import { StyledCabecalhoVerde } from "../../style/style-tela-inicial";
import { StyledLink } from "../../style/styledGeral";
import { SlActionUndo } from "react-icons/sl";

interface CabecalhoVerdeProps
{
  titulo: string
}

export default function CabecalhoVerde({titulo}: CabecalhoVerdeProps) {
    return (
        <>
        <StyledCabecalhoVerde>
            <h1>{titulo}</h1>
            <StyledLink to = "/home"><SlActionUndo/></StyledLink>
        </StyledCabecalhoVerde>
        </>
    )
}