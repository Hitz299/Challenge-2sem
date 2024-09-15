import { useState } from "react";
import { StyledInput } from "../../style/styled-conta";
import { StyledJanela } from "../../style/styled-funcionalidades";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { StyledCentraliza, StyledTituloModal } from "../../style/styledGeral";

export default function FormularioRedefinirSenha() {

    const [janelaRS, setRS] = useState<boolean>(false);
     const navigate = useNavigate();

    const enviarEmail = () => {
       setTimeout(() => {
        setRS(true);
      }, 500);
    };

     const RedefinirSenha = () => {
         
      setTimeout(() => {
         navigate("/login")
      }, 800);
    };


  return (
    <>
     <StyledJanela open={janelaRS}>
     
     <StyledCentraliza>
            <StyledTituloModal>Crie uma nova senha para sua conta</StyledTituloModal>
            
           <StyledInput name="senha" type="password" placeholder="Insira uma nova senha"/>
           <Button titulo="Redefinir" click={RedefinirSenha}/>
           </StyledCentraliza>
      </StyledJanela>
    <form>

    <StyledInput name="email" type="email" placeholder="Informe seu Email"/>
  </form>
    <Button titulo="Enviar" click={enviarEmail}/>
    </>
  )
}
