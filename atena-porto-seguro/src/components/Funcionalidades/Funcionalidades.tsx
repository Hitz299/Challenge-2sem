import React from "react";
import { StyledTituloServico, StyleIconeServico, StyleServico } from "../../style/style-tela-inicial";
import { StyledLink } from "../../style/styledGeral";


interface FuncionalidadesProps {

    cor: string;
    nome: string;
    icone: string | React.ReactNode;
}

export default function Funcionalidades({ cor, nome, icone}: FuncionalidadesProps) {


    return (
        <>

            <StyleServico color={cor}>
                    <div>
                      
                            <StyledTituloServico>{nome}</StyledTituloServico>
                       
                    </div>
                  
                  <StyleIconeServico>
                        
                    <figure>
                            {icone}
                    </figure>
                </StyleIconeServico>

            </StyleServico>

            
        </>
    )
}
