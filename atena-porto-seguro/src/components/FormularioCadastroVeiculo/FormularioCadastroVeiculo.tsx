import { useState } from "react";
import { StyledInput } from "../../style/styled-conta";
import { StyledCadastrarVeiculosContainer, StyledJanela } from "../../style/styled-funcionalidades";
import { StyledContainerEntrada } from "../../style/styledGeral";
import Button from "../Button/Button";


export default function FormularioCadastroVeiculo() {

    const [janela, setJanela] = useState<boolean>(false)
                         

   const abrirJanela = () => {
        setJanela(true);
        setTimeout(() => {
          setJanela(false);
        }, 2200);
    };


  return (
  
    <>

    <form action="#">

        <StyledCadastrarVeiculosContainer>

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

                <Button titulo="Cadastrar" click={abrirJanela}/>



          
          <StyledJanela open={janela}>
     
            <h2>Veículo cadastrado com Sucesso</h2>
           
       
      </StyledJanela>
         
              
        </StyledCadastrarVeiculosContainer>


    </form>

     </>
  )
}
