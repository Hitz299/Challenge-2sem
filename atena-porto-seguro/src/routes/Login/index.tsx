import BgGradient from "../../components/BgGradient/BgGradient";
import CabecalhoAzul from "../../components/CabecalhoAzul/CabecalhoAzul";
import FormularioLogin from "../../components/FormularioLogin/FormularioLogin";
import RodapeCadastro from "../../components/RodapeCadastro/RodapeCadastro";


export default function Login() {

    document.title = "Login";

  return (
    <>    
     <CabecalhoAzul/>
       <BgGradient>

        
        <FormularioLogin/>
       <RodapeCadastro link1="./recuperar/senha" link2="./criar/conta"
       nomeLink1="Esqueci minha senha" nomeLink2="Criar Conta" />
      </BgGradient>
        
    </>
     
  )
}
