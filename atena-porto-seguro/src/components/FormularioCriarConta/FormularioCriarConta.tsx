import { StyledInput } from "../../style/styled-conta";
import { StyledContainerEntrada } from "../../style/styledGeral";

export default function FormularioCriarConta() {
  return (

    <>
      <form>
        <StyledContainerEntrada>

          <label htmlFor="nome">Nome</label>
          <StyledInput id="nome" name="nome" type="text" placeholder="Informe seu Nome" />
        </StyledContainerEntrada>
        <StyledContainerEntrada>

          <label htmlFor="emailCC">Email</label>
          <StyledInput id="emailCC" name="email" type="email" placeholder="Informe seu Email" />
        </StyledContainerEntrada>
        <StyledContainerEntrada>

          <label htmlFor="senhaCC">Senha</label>
          <StyledInput id="senhaCC" name="senha" type="password" placeholder="Crie uma senha forte" />
        </StyledContainerEntrada>

      </form>

    </>
  )
}
