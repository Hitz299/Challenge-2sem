import { StyledCabecalhoVerde, StylediconePerfil, StyledLogoPorto } from "../../style/style-tela-inicial";

interface CabecalhoInicialProps {
  titulo: string
}

export default function CabecalhoInicial({ titulo }: CabecalhoInicialProps) {
  return (
    <>

      <StyledCabecalhoVerde>
        <h1>{titulo}</h1>
        <StyledLogoPorto src="/public/logo-portoseguro.webp" alt="Logo da Porto Seguro" />
        <StylediconePerfil />
      </StyledCabecalhoVerde>

    </>
  )
}
