import { useState } from "react";
import { StyledInput } from "../../style/styled-conta";
import { StyledJanela } from "../../style/styled-funcionalidades";
import Button from "../Button/Button";

export default function FormularioRedefinirSenha() {

  
    const [janela, setJanela] = useState<boolean>(false)
                         

   const abrirJanela = () => {
        setJanela(true);
    };

     const cadastrarSenha = () => {
        setJanela(true);
    };

  return (
    <>
    <form action="#">
    <StyledInput name="email" type="email" placeholder="Informe seu Email"/>
    
    <Button titulo="Enviar" click={abrirJanela}/>

     <StyledJanela open={janela}>
     
            <h2>Crie uma nova senha para sua conta</h2>
           
           <Button titulo="Redefinir" click={cadastrarSenha}/>
      </StyledJanela>
</form>
    </>
  )
}
