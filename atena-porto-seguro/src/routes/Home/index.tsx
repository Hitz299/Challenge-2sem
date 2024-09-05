import BgInicial from "../../components/BgInicial/BgInicial";
import CabecalhoVerde from "../../components/CabecalhoVerde/CabecalhoVerde";
import { FaCar } from "react-icons/fa";
import Funcionalidades from "../../components/Funcionalidades/Funcionalidades";


export default function Home() {

  document.title = "Home";

  return (
    <>
      <CabecalhoVerde titulo="Página inicial" />
     

         
       <BgInicial>

          <Funcionalidades nome="Seus veículos" link="./meus/veiculos" 
          icone={<FaCar/>} cor="#68ee86"/>

           <Funcionalidades nome="Adicionar veículos" link="./adicionar/veiculos" 
          icone={<FaCar/>} cor="#3da3d0"/> 

          <Funcionalidades nome="Obter Ajuda" link="./chatbot" 
          icone={<FaCar/>} cor="#68ee86"/>

      </BgInicial>
    </>
  )
}
