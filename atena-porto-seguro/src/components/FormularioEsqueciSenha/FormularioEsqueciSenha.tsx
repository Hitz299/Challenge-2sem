import { StyledParagrafoCadastro } from "../../style/styled-cadastro";
import { StyledInput } from "../../style/styled-conta";
import { StyledContainerEntrada } from "../../style/styledGeral";




export default function FormularioEsqueciSenha() {
  return (
    <>
      <StyledContainerEntrada>
        <StyledParagrafoCadastro />
        <label htmlFor="email">Email</label>
        <StyledInput name="email" type="email" placeholder="Informe seu Email" />
      </StyledContainerEntrada>
    </>
  )
}
