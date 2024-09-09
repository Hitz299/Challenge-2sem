import { StyledRepositorioContainer, StyledRodapeIntegrantes } from "../../style/styled-cadastro";
import { MdCloud } from "react-icons/md";
import { StyledLink, StyledLinkExterno } from "../../style/styledGeral";


export default function RodapeIntegrantes() {
  return (
    <>
        <StyledRodapeIntegrantes>


              <StyledLinkExterno
                href="https://github.com/Hitz299/Challenge-2sem/tree/front"
                target="_blank">
                <StyledRepositorioContainer>
                  
                  <p>Repositório Remoto</p>  

                   <MdCloud/>
                </StyledRepositorioContainer>
            
            </StyledLinkExterno> 

            <StyledLink to= "/home">Página Inicial</StyledLink>

        </StyledRodapeIntegrantes>
    
    
    </>
  )
}
