import BgGradient from "../../components/BgGradient/BgGradient";
import CabecalhoAzul from "../../components/CabecalhoAzul/CabecalhoAzul";
import InfoConta from "../../components/InfoConta/InfoConta";
import RodapeVoltar from "../../components/RodapeVoltar/RodapeVoltar";

export default function MinhaConta() {

    document.title = "Minha Conta";

  return (
    <>
       <CabecalhoAzul titulo="Configurar Perfil" />
      <BgGradient>
        
        <InfoConta/>
        <RodapeVoltar link="/home"/>
      </BgGradient>
  
  </>
  )
}
