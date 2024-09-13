import { useNavigate } from "react-router-dom";
import BgGradient from "../../components/BgGradient/BgGradient";
import Button from "../../components/Button/Button";
import CabecalhoAzul from "../../components/CabecalhoAzul/CabecalhoAzul";
import FormularioEsqueciSenha from "../../components/FormularioEsqueciSenha/FormularioEsqueciSenha";
import RodapeVoltar from "../../components/RodapeVoltar/RodapeVoltar";


export default function EsqueciSenha() {
    
    document.title = "Recuperar Senha";

    const navigate = useNavigate();

    const irRedefinirSenha = () => 
    (
      navigate("./redefinir/senha")
    )

  return (
    <>
      <CabecalhoAzul titulo="Recuperar Senha"/> 

      <BgGradient>

          <FormularioEsqueciSenha/>
          <Button click={irRedefinirSenha} titulo="Enviar"/>
            <RodapeVoltar link="/login"/>
      </BgGradient>
   </>
  )
}
