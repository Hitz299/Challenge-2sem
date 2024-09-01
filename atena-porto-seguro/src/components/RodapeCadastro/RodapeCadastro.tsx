import { Link } from "react-router-dom";
import { StyleRodapeLink } from "../../style/styledGeral";

interface RodapeCadastroProps {
    link1: string,
    link2: string 
    nomeLink1: string
    nomeLink2: string
    }


export default function RodapeCadastro({link1, link2, nomeLink1, nomeLink2}: RodapeCadastroProps) {
  return (
    <>
        <nav>
            <StyleRodapeLink>
                <li><Link to={link1}>{nomeLink1} </Link></li>
                <li><Link to={link2}>{nomeLink2}</Link></li>

            </StyleRodapeLink>
        </nav>    
    
    </>
  )
}

