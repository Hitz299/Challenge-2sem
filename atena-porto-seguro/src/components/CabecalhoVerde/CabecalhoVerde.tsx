import { StyleCabecalhoVerde } from "../../style/style-tela-inicial";

interface CabecalhoVerdeProps
{
  titulo: string
}

export default function CabecalhoVerde({titulo}: CabecalhoVerdeProps) {
    return (
        <>
        <StyleCabecalhoVerde>
            <h1>{titulo}</h1>
        </StyleCabecalhoVerde>
        </>
    )
}