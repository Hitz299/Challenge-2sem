import BgGradient from "../../components/BgGradient/BgGradient";
import Button from "../../components/Button/Button";
import CabecalhoAzul from "../../components/CabecalhoAzul/CabecalhoAzul";
import FormularioEsqueciSenha from "../../components/FormularioEsqueciSenha/FormularioEsqueciSenha";
import RodapeVoltar from "../../components/RodapeVoltar/RodapeVoltar";


export default function EsqueciSenha() {
    
    document.title = "Recuperar Senha";

  return (
    <>
      <CabecalhoAzul titulo="Recuperar Senha"/> 

      <BgGradient>

          <FormularioEsqueciSenha/>
          <Button click={() => {}} titulo="Enviar"/>
            <RodapeVoltar link="/login"/>
      </BgGradient>
   </>
  )
}
