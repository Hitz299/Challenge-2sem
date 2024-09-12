import BgGradient from "../../components/BgGradient/BgGradient";
import Button from "../../components/Button/Button";
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
        <Button click={() => {}} titulo="Criar"/>

        <RodapeVoltar link="/login"/>
      </BgGradient>
    </>
  )
}
