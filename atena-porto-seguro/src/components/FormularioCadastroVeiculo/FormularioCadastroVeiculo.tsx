import { useRef } from "react";
import { StyledInput } from "../../style/styled-conta";
import { StyledCadastrarVeiculosContainer, StyledJanela } from "../../style/styled-funcionalidades";
import { StyledContainerEntrada } from "../../style/styledGeral";
import Button from "../Button/Button";


export default function FormularioCadastroVeiculo() {

                         
    const janelaRef = useRef<HTMLDialogElement>(null);

   const abrirJanela = () => {
    
        janelaRef.current?.showModal();
   };

    const fecharJanela = () => {
    
        janelaRef.current?.close();
   };


  return (
  
    <>

    <form action="#">

        <StyledCadastrarVeiculosContainer>
          
          <StyledJanela ref={janelaRef}>
     
            <h2>Veículo cadastrado com Sucesso</h2>

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




         
                <Button titulo="Cadastrar" click={abrirJanela}/>
              
        </StyledCadastrarVeiculosContainer>


    </form>

     </>
  )
}
