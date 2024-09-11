import { useNavigate } from "react-router-dom";
import BgGradient from "../../components/BgGradient/BgGradient";
import Button from "../../components/Button/Button";
import CabecalhoAzul from "../../components/CabecalhoAzul/CabecalhoAzul";
import FormularioLogin from "../../components/FormularioLogin/FormularioLogin";
import RodapeCadastro from "../../components/RodapeCadastro/RodapeCadastro";


export default function Login() {

  document.title = "Login";

  const navigate = useNavigate();

  const btnIntegrantes = () => {
    navigate("/home", { replace: true } );
  };

  return (
    <>
      <CabecalhoAzul titulo="Login" />
      <BgGradient>


        <FormularioLogin />

        <Button click={btnIntegrantes} titulo="Entrar" />

        <RodapeCadastro link1="./recuperar/senha" link2="./criar/conta"
          nomeLink1="Esqueci minha senha" nomeLink2="Criar Conta" />
      </BgGradient>


    </>

  )
}
