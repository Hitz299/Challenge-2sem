import { StyledInput } from "../../style/styled-conta";
import { StyleContainerEntrada } from "../../style/styledGeral";

export default function FormularioCriarConta() {
  return (
    
        <>
        <form>
          <StyleContainerEntrada>
               
                <label htmlFor="nome">Nome</label>
                <StyledInput type="text" placeholder="Informe seu Nome"/>
            </StyleContainerEntrada>
            <StyleContainerEntrada>
               
                <label htmlFor="email">Email</label>
                <StyledInput type="email" placeholder="Informe seu Email"/>
            </StyleContainerEntrada>
            <StyleContainerEntrada>
                
                <label htmlFor="senha">Senha</label>
                <StyledInput type="password" placeholder="Crie uma senha forte"/>
            </StyleContainerEntrada>
          
        </form>
     
     </>
  )
}
