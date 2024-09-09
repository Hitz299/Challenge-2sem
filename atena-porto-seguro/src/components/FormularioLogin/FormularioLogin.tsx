
import { StyledInput } from "../../style/styled-conta";
import { StyledContainerEntrada } from "../../style/styledGeral";

export default function FormularioLogin() {
  return (
     <>
        <form>
            <StyledContainerEntrada>
               
                <label>Email</label>
                <StyledInput type="email" placeholder="Digite seu Email"/>
            </StyledContainerEntrada>
            <StyledContainerEntrada>
                
                <label>Senha</label>
                <StyledInput type="password" placeholder="Digite sua senha"/>
            </StyledContainerEntrada>
          
        </form>
     
     </>
  )
}
