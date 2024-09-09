import { StyledInput } from "../../style/styled-conta";
import { StyledContainerEntrada } from "../../style/styledGeral";

export default function FormularioCriarConta() {
  return (

    <>
      <form>
        <StyledContainerEntrada>

          <label htmlFor="nome">Nome</label>
          <StyledInput id="nome" type="text" placeholder="Informe seu Nome" />
        </StyledContainerEntrada>
        <StyledContainerEntrada>

          <label htmlFor="email">Email</label>
          <StyledInput id="email" type="email" placeholder="Informe seu Email" />
        </StyledContainerEntrada>
        <StyledContainerEntrada>

          <label htmlFor="senha">Senha</label>
          <StyledInput id="email" type="password" placeholder="Crie uma senha forte" />
        </StyledContainerEntrada>

      </form>

    </>
  )
}
