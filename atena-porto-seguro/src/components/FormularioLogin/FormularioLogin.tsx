
import { StyleInput } from "../../style/styled-conta";

export default function FormularioLogin() {
  return (
     <>
        <form>
            <div>
               
                <label htmlFor="email">Email</label>
                <StyleInput type="email" placeholder="Digite seu Email"/>
            </div>
            <div>
                
                <label htmlFor="senha">Senha</label>
                <StyleInput type="password" placeholder="Digite sua senha"/>
            </div>
          
        </form>
     
     </>
  )
}
