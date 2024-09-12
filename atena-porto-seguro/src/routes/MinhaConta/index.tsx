import BgGradient from "../../components/BgGradient/BgGradient";
import CabecalhoAzul from "../../components/CabecalhoAzul/CabecalhoAzul";
import InfoConta from "../../components/InfoConta/InfoConta";

export default function MinhaConta() {

    document.title = "Minha Conta";

  return (
    <>
       <CabecalhoAzul titulo="Configurar Perfil" />
      <BgGradient>
        
        <InfoConta/>

      </BgGradient>
  
  </>
  )
}
