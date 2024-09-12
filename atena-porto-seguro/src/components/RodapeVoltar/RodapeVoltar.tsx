
import { StyledRodapeIntegrantes } from "../../style/styled-cadastro";
import { StyledLink } from "../../style/styledGeral";


interface RodapeVoltarProps
{
  link: string;
}


export default function RodapeVoltar({link}: RodapeVoltarProps) {


  return (
    <>
      <StyledRodapeIntegrantes>

        <nav>
          <StyledLink to={link}>Página Inicial</StyledLink>
        </nav>


      </StyledRodapeIntegrantes>


    </>
  )
}
