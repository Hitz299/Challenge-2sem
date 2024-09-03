import { ReactNode } from "react";
import { StyleServico } from "../../style/style-tela-inicial";

interface FuncionalidadesProps {

    cor: string;
    nome: string;
    icone: ReactNode;
}

export default function Funcionalidades({ cor, nome, icone }: FuncionalidadesProps) {


    return (
        <>

            <StyleServico color={cor}>



            </StyleServico>


        </>
    )
}
