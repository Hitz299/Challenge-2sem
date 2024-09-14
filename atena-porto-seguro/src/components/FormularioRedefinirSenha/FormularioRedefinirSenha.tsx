import { StyledInput } from "../../style/styled-conta";
import { StyledJanela } from "../../style/styled-funcionalidades";
import Button from "../Button/Button";

export default function FormularioRedefinirSenha() {

  

  return (
    <>
    <form action="#">
    <StyledInput name="email" type="email" placeholder="Informe seu Email"/>
    
    <Button titulo="Enviar" click={() => {}}/>

     <StyledJanela>
     
            <h2>Crie uma nova senha para sua conta</h2>
           
           <Button titulo="Redefinir" click={() => {}}/>
      </StyledJanela>
</form>
    </>
  )
}
