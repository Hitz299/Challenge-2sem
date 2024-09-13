import BgGradient from "../../components/BgGradient/BgGradient";
import Button from "../../components/Button/Button";
import CabecalhoAzul from "../../components/CabecalhoAzul/CabecalhoAzul";
import FormularioRedefinirSenha from "../../components/FormularioRedefinirSenha/FormularioRedefinirSenha";
import RodapeVoltar from "../../components/RodapeVoltar/RodapeVoltar";
import TextoInformativo from "../../components/TextoInformativo/TextoInformativo";


export default function RedefinirSenha() {

    document.title = "Redefinir Senha";

  return (
    <>
      <CabecalhoAzul titulo="Redefinir senha"/>

      <BgGradient>
        <TextoInformativo texto="Informe o email vinculado a sua conta 
        para enviarmos o código de verificação"/>
        <FormularioRedefinirSenha/>
        <Button titulo="Enviar Código" click={()=>{}}/>
        <RodapeVoltar link="/login"/>
        </BgGradient>
    </>
  )
}
