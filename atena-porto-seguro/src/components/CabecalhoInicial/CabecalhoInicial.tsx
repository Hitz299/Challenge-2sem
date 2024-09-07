import { StyleCabecalhoVerde, StylediconePerfil, StyleLogoPorto} from "../../style/style-tela-inicial";

interface CabecalhoInicialProps
{
  titulo: string
}

export default function CabecalhoInicial({titulo}: CabecalhoInicialProps) {
  return (
    <>
    
        <StyleCabecalhoVerde>
             <h1>{titulo}</h1>
             <StyleLogoPorto src="/public/logo-portoseguro.webp" alt="Logo da Porto Seguro" />
          <StylediconePerfil/>
        </StyleCabecalhoVerde>
    
    </>
  )
}
