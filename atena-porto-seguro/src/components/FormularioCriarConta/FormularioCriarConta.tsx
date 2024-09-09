import { StyledInput } from "../../style/styled-conta";
import { StyledContainerEntrada } from "../../style/styledGeral";

export default function FormularioCriarConta() {
  return (

    <>
      <form>
        <StyledContainerEntrada>

          <label htmlFor="nome">Nome</label>
          <StyledInput name="nome" type="text" placeholder="Informe seu Nome" />
        </StyledContainerEntrada>
        <StyledContainerEntrada>

          <label htmlFor="email">Email</label>
          <StyledInput name="email" type="email" placeholder="Informe seu Email" />
        </StyledContainerEntrada>
        <StyledContainerEntrada>

          <label htmlFor="senha">Senha</label>
          <StyledInput name="senha" type="password" placeholder="Crie uma senha forte" />
        </StyledContainerEntrada>

      </form>

    </>
  )
}
