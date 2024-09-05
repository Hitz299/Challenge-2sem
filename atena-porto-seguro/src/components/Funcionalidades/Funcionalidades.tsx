import React from "react";
import { StyleIconeServico, StyleServico } from "../../style/style-tela-inicial";
import { StyledLink } from "../../style/styledGeral";


interface FuncionalidadesProps {

    cor: string;
    nome: string;
    icone: string | React.ReactNode;
    link: string;
}

export default function Funcionalidades({ cor, nome, icone, link }: FuncionalidadesProps) {


    return (
        <>

            <StyleServico color={cor}>
                    <div>
                      
                            <StyledLink to={link}>{nome}</StyledLink>
                       
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
