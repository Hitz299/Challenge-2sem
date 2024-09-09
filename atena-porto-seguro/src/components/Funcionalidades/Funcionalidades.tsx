import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledIconeServico, StyledServico, StyledTituloServico } from "../../style/style-tela-inicial";

interface FuncionalidadesProps {
    cor: string;
    nome: string;
    icone: string | React.ReactNode;
    link: string;
}

export default function Funcionalidades({ cor, nome, icone, link }: FuncionalidadesProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(link);
    };

    return (
        <StyledServico color={cor} onClick={handleClick}>
            <StyledIconeServico>
                <figure>
                    {icone}
                </figure>
            </StyledIconeServico>
            <div>
                <StyledTituloServico>{nome}</StyledTituloServico>
            </div>
        </StyledServico>
    );
}
