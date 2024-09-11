import { useNavigate } from "react-router-dom";
import { StyledCabecalhoVerde, StylediconePerfil, StyledLogoPorto } from "../../style/style-tela-inicial";

interface CabecalhoInicialProps {
  titulo: string
}

export default function CabecalhoInicial({ titulo }: CabecalhoInicialProps) {

    const navigate = useNavigate();

    const irConfigPerfil = () => 
    {
      navigate("./minha/conta");
    }

  return (
    <>

      <StyledCabecalhoVerde>
        <h1>{titulo}</h1>
        <StyledLogoPorto src="/logo-portoseguro.webp" alt="Logo da Porto Seguro" />
        <StylediconePerfil onClick={irConfigPerfil}/>
      </StyledCabecalhoVerde>

    </>
  )
}
