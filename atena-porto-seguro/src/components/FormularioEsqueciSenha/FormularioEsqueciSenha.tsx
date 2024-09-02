import { StyleParagrafoCadastro } from "../../style/styled-cadastro";
import { StyledInput } from "../../style/styled-conta";
import { StyleContainerEntrada } from "../../style/styledGeral";




export default function FormularioEsqueciSenha() {
  return (
    <>
    <StyleContainerEntrada>
               <StyleParagrafoCadastro/>
                <label htmlFor="email">Email</label>
                <StyledInput type="email" placeholder="Informe seu Email"/>
            </StyleContainerEntrada>
    </>
  )
}
