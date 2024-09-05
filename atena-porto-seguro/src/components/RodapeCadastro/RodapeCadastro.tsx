
import { StyledLi, StyledLink, StyleRodapeLink } from "../../style/styledGeral";

interface RodapeCadastroProps {
    link1: string
    link2: string
    nomeLink1: string,
    nomeLink2: string
    }


export default function RodapeCadastro({link1, link2, nomeLink1, nomeLink2}: RodapeCadastroProps) {
  return (
    <>
        <nav>
            <StyleRodapeLink>
                <StyledLi><StyledLink to={link1}>{nomeLink1} </StyledLink></StyledLi>
                <StyledLi><StyledLink to={link2}>{nomeLink2}</StyledLink></StyledLi>

            </StyleRodapeLink>
        </nav>    
    
    </>
  )
}

