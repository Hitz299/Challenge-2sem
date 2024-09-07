import { StyledCabecalhoVerde } from "../../style/style-tela-inicial";

interface CabecalhoVerdeProps
{
  titulo: string
}

export default function CabecalhoVerde({titulo}: CabecalhoVerdeProps) {
    return (
        <>
        <StyledCabecalhoVerde>
            <h1>{titulo}</h1>
        </StyledCabecalhoVerde>
        </>
    )
}