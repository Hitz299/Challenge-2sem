
import { StyledInput } from "../../style/styled-conta";
import { StyledContainerEntrada } from "../../style/styledGeral";

export default function FormularioLogin() {
    return (
        <>
            <form>
                <StyledContainerEntrada>

                    <label htmlFor="email">Email</label>
                    <StyledInput id="email" name="email" type="email" placeholder="Digite seu Email" />
                </StyledContainerEntrada>
                <StyledContainerEntrada>

                    <label htmlFor="senha">Senha</label>
                    <StyledInput id="senha" name="senha" type="password" placeholder="Digite sua senha" />
                </StyledContainerEntrada>

            </form>

        </>
    )
}
