import BgGradient from "../../components/BgGradient/BgGradient";
import Button from "../../components/Button/Button";
import CabecalhoAzul from "../../components/CabecalhoAzul/CabecalhoAzul";
import FormularioCriarConta from "../../components/FormularioCriarConta/FormularioCriarConta";


export default function CriarConta() {

    document.title = "Criar Conta";

  return (
    <>
       <CabecalhoAzul titulo="Criar Conta"/>
       <BgGradient>

        
        <FormularioCriarConta/>
        <Button click={() => {}} titulo="Criar"/>
      </BgGradient>
    </>
  )
}
