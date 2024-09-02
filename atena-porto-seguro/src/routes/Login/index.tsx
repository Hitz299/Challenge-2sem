import BgGradient from "../../components/BgGradient/BgGradient";
import Button from "../../components/Button/Button";
import CabecalhoAzul from "../../components/CabecalhoAzul/CabecalhoAzul";
import FormularioLogin from "../../components/FormularioLogin/FormularioLogin";
import RodapeCadastro from "../../components/RodapeCadastro/RodapeCadastro";


export default function Login() {

    document.title = "Login";

  return (
    <>    
     <CabecalhoAzul titulo="Login"/>
       <BgGradient>

        
        <FormularioLogin/>

        <Button titulo="Entrar"/>

       <RodapeCadastro link1="./recuperar/senha" link2="./criar/conta"
       nomeLink1="Esqueci minha senha" nomeLink2="Criar Conta" />
      </BgGradient>
        
    </>
     
  )
}
