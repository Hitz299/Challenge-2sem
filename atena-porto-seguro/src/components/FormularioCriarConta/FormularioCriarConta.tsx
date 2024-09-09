import { StyledInput } from "../../style/styled-conta";
import { StyledContainerEntrada } from "../../style/styledGeral";

export default function FormularioCriarConta() {
  return (
    
        <>
        <form>
          <StyledContainerEntrada>
               
                <label>Nome</label>
                <StyledInput type="text" placeholder="Informe seu Nome"/>
            </StyledContainerEntrada>
            <StyledContainerEntrada>
               
                <label>Email</label>
                <StyledInput type="email" placeholder="Informe seu Email"/>
            </StyledContainerEntrada>
            <StyledContainerEntrada>
                
                <label>Senha</label>
                <StyledInput type="password" placeholder="Crie uma senha forte"/>
            </StyledContainerEntrada>
          
        </form>
     
     </>
  )
}
