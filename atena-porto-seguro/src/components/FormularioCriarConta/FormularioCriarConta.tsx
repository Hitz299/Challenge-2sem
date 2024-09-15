import { useState } from "react";
import { StyledInput } from "../../style/styled-conta";
import { StyledContainerEntrada, StyledTituloModal } from "../../style/styledGeral";
import Button from "../Button/Button";
import { StyledJanela } from "../../style/styled-funcionalidades";
import { useNavigate } from "react-router-dom";

export default function FormularioCriarConta() {
  
                        
    const [janelaCC, setCC] = useState<boolean>(false);
    const navigate = useNavigate();

   const criarConta = () => {
      setCC(true);
      setTimeout(() => {
         navigate("/login")
      }, 2000);
   };


  return (

    <>
      <form>
        <StyledContainerEntrada>

            <StyledJanela open={janelaCC}>  
     
            <StyledTituloModal>Conta criáda com sucesso!</StyledTituloModal>
            

          </StyledJanela>

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

      <Button click={criarConta} titulo="Criar"/>

    </>
  )
}
