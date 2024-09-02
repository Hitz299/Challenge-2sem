import BgGradient from "../../components/BgGradient/BgGradient";
import CabecalhoAzul from "../../components/CabecalhoAzul/CabecalhoAzul";
import FormularioCriarConta from "../../components/FormularioCriarConta/FormularioCriarConta";
import RodapeCadastro from "../../components/RodapeCadastro/RodapeCadastro";


export default function CriarConta() {

    document.title = "Criar Conta";

  return (
    <>
       <CabecalhoAzul titulo="Criar Conta"/>
       <BgGradient>

        
        <FormularioCriarConta/>
       <RodapeCadastro link1="./recuperar/senha" link2="./criar/conta"
       nomeLink1="Esqueci minha senha" nomeLink2="Criar Conta" />
      </BgGradient>
    </>
  )
}
