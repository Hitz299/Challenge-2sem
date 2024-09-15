import BgGradient from "../../components/BgGradient/BgGradient";
import CabecalhoAzul from "../../components/CabecalhoAzul/CabecalhoAzul";
import FormularioCriarConta from "../../components/FormularioCriarConta/FormularioCriarConta";
import RodapeVoltar from "../../components/RodapeVoltar/RodapeVoltar";


export default function CriarConta() {

    document.title = "Criar Conta";

  return (
    <>
       <CabecalhoAzul titulo="Criar Conta"/>
       <BgGradient>

        
        <FormularioCriarConta/>
        

        <RodapeVoltar link="/login"/>
      </BgGradient>
    </>
  )
}
