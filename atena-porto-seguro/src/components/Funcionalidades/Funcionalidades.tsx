import { StyleServico } from "../../style/style-tela-inicial";
import { Link } from "react-router-dom"


interface FuncionalidadesProps {

    cor: string;
    nome: string;
    icone: string;
    link: string;
    altImg: string
}

export default function Funcionalidades({ cor, nome, icone, link, altImg }: FuncionalidadesProps) {


    return (
        <>

            <StyleServico color={cor}>
                    <p>{nome}</p>
                <Link to={link}>   </Link>
                <div>
                    <img src={icone} alt={altImg} />
                </div>

            </StyleServico>


        </>
    )
}
