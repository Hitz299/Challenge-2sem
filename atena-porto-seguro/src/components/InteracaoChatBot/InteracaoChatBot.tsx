import { StyledChatBox, StyledChatContainer, StyledContainerMensagem, StyledUserInput } from "../../style/styled-funcionalidades"
import Button from "../Button/Button"


export default function InteracaoChatBot() {
  return (
    <>
    
     <StyledChatContainer>

            <StyledChatBox></StyledChatBox>

          <StyledContainerMensagem>
           
            <StyledUserInput placeholder="Informe sua dúvida"
            type="text" name="mensagem"/>

          
            <Button titulo="Enviar" click={() => {}}/>
        
          </StyledContainerMensagem>

        </StyledChatContainer>
    
    </>
  )
}
