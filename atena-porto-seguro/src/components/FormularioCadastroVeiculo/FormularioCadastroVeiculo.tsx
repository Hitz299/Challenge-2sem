import {  useState } from "react";
import { StyledInput } from "../../style/styled-conta";
import { StyledCadastrarVeiculosContainer, StyledJanela } from "../../style/styled-funcionalidades";
import { StyledContainerEntrada, StyledTituloModal } from "../../style/styledGeral";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";


export default function FormularioCadastroVeiculo() {

                         
    const [janelaCV, setCV] = useState<boolean>(false);
    const navigate = useNavigate();

   const abrirJanela = () => {
      setCV(true);
   };

    const fecharJanela = () => {
        setCV(false);
        navigate("/home")
   };


  return (
  
    <>

    <form>

        <StyledCadastrarVeiculosContainer>
          
          <StyledJanela open={janelaCV}>
     
            <StyledTituloModal>Veículo cadastrado com Sucesso</StyledTituloModal>

            <Button titulo="Ok" click={fecharJanela}/>
           
          </StyledJanela>

            <StyledContainerEntrada>
              <label htmlFor="chassi">Chassi</label>
                <StyledInput id="chassi" name="chassi" type="text" placeholder="Informe o chassi" />
            </StyledContainerEntrada>

            <StyledContainerEntrada>
              <label htmlFor="placa">Placa</label>
                  <StyledInput id="placa" name="placa" type="text" placeholder="Informe a placa" />
            </StyledContainerEntrada>

                <StyledContainerEntrada>
              <label htmlFor="marca">Marca</label>
                    <StyledInput id="marca" name="marca" type="text" placeholder="Informe a marca" />
              </StyledContainerEntrada>

                <StyledContainerEntrada>
                <label htmlFor="modelo">Modelo</label>
                    <StyledInput id="modelo" name="modelo" type="text" placeholder="Informe o modelo" />
              </StyledContainerEntrada>


        <StyledContainerEntrada>
              <label htmlFor="cor">Cor</label>
                    <StyledInput id="cor" name="cor" type="text" placeholder="Informe a cor" />
                </StyledContainerEntrada>




         
              
        </StyledCadastrarVeiculosContainer>


    </form>

                <Button titulo="Cadastrar" click={abrirJanela}/>
     </>
  )
}
