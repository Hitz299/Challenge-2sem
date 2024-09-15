import BgGradient from "../../components/BgGradient/BgGradient";
import CabecalhoVerde from "../../components/CabecalhoVerde/CabecalhoVerde";
import InteracaoChatBot from "../../components/InteracaoChatBot/InteracaoChatBot";



export default function ChatBot() {

    document.title = "Contato com Suporte";

  return (
    <>
      <CabecalhoVerde titulo="Contato com Suporte"/>
    
      <BgGradient>

        <InteracaoChatBot/>

      </BgGradient>
    
    </>
  )
}
