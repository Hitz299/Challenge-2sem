import React from "react";
import { StyledTituloServico, StyleIconeServico, StyleServico } from "../../style/style-tela-inicial";


interface FuncionalidadesProps {

    cor: string;
    nome: string;
    icone: string | React.ReactNode;
}

export default function Funcionalidades({ cor, nome, icone}: FuncionalidadesProps) {


    return (
        <>

            <StyleServico color={cor}>
            <StyleIconeServico>
                <figure>
                    {icone}
                </figure>
            </StyleIconeServico>
            <div>
            <StyledTituloServico>{nome}</StyledTituloServico>
            </div>
        </StyleServico>

            
        </>
    )
}
