import { MdCloud } from "react-icons/md";
import { StyledRepositorioContainer, StyledRodapeIntegrantes } from "../../style/styled-cadastro";
import { StyledLink } from "../../style/styledGeral";



export default function RodapeIntegrantes() {

  const navegar = () => {
    return (
      window.open("https://github.com/Hitz299/Challenge-2sem/tree/front", "_blank")
    )

  }

  return (
    <>
      <StyledRodapeIntegrantes>





        <StyledRepositorioContainer onClick={navegar}>

          <p>Repositório Remoto</p>

          <MdCloud />
        </StyledRepositorioContainer>

        <div>
          <nav>
            <StyledLink to="/home">Página Inicial</StyledLink>
          </nav>
        </div>
      </StyledRodapeIntegrantes>


    </>
  )
}
