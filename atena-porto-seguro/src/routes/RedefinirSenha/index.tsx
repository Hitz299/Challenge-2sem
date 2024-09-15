import BgGradient from "../../components/BgGradient/BgGradient";
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
        <TextoInformativo texto="Informe o código de recuperação que foi enviado ao seu email vincúlado"/>
        <FormularioRedefinirSenha/>
        <RodapeVoltar link="/login"/>
        </BgGradient>
    </>
  )
}
