import { StyledInput } from "../../style/styled-conta";
import { StyledCadastrarVeiculosContainer } from "../../style/styled-funcionalidades";
import { StyledContainerEntrada } from "../../style/styledGeral";
import Button from "../Button/Button";


export default function FormularioCadastroVeiculo() {
  return (
    
    <form action="#">

        <StyledCadastrarVeiculosContainer>

            <StyledContainerEntrada>
              <label htmlFor="chassi">Chassi</label>
                <StyledInput id="chassi" name="chassi" type="email" placeholder="Informe o chassi" />
            </StyledContainerEntrada>

            <StyledContainerEntrada>
              <label htmlFor="placa">Placa</label>
                  <StyledInput id="placa" name="placa" type="email" placeholder="Informe a placa" />
            </StyledContainerEntrada>

                <StyledContainerEntrada>
              <label htmlFor="marca">Marca</label>
                    <StyledInput id="marca" name="marca" type="email" placeholder="Informe a marca" />
              </StyledContainerEntrada>

                <StyledContainerEntrada>
                <label htmlFor="modelo">Modelo</label>
                    <StyledInput id="modelo" name="modelo" type="email" placeholder="Informe o modelo" />
              </StyledContainerEntrada>


        <StyledContainerEntrada>
              <label htmlFor="cor">Cor</label>
                    <StyledInput id="cor" name="cor" type="email" placeholder="Informe a cor" />
                </StyledContainerEntrada>

                <Button titulo="Cadastrar" click={() => {}}/>


        </StyledCadastrarVeiculosContainer>


    </form>

  )
}
