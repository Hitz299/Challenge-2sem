import BgGradient from "../../components/BgGradient/BgGradient";
import Button from "../../components/Button/Button";
import CabecalhoVerde from "../../components/CabecalhoVerde/CabecalhoVerde";
import { StyledChatBox, StyledChatContainer, StyledContainerMensagem, StyledUserInput } from "../../style/styled-funcionalidades";


export default function ChatBot() {

    document.title = "Contato com Suporte";

  return (
    <>
      <CabecalhoVerde titulo="Contato com Suporte"/>
    
      <BgGradient>

        <StyledChatContainer>

            <StyledChatBox></StyledChatBox>

          <StyledContainerMensagem>
           
            <StyledUserInput placeholder="Informe sua dúvida"
            type="text" name="mensagem"/>

          
            <Button titulo="Enviar" click={() => {console.log("teste")}}/>
        
          </StyledContainerMensagem>

        </StyledChatContainer>

      </BgGradient>
    
    </>
  )
}
