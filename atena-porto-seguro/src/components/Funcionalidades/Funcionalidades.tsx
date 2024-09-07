import React from "react";
import { StyledTituloServico, StyledIconeServico, StyledServico } from "../../style/style-tela-inicial";


interface FuncionalidadesProps {

    cor: string;
    nome: string;
    icone: string | React.ReactNode;
}

export default function Funcionalidades({ cor, nome, icone}: FuncionalidadesProps) {


    return (
        <>

            <StyledServico color={cor}>
            <StyledIconeServico>
                <figure>
                    {icone}
                </figure>
            </StyledIconeServico>
            <div>
            <StyledTituloServico>{nome}</StyledTituloServico>
            </div>
        </StyledServico>

            
        </>
    )
}
