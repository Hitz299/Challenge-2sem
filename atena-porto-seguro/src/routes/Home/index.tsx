import BgInicial from "../../components/BgInicial/BgInicial";
import Button from "../../components/Button/Button";
import CabecalhoVerde from "../../components/CabecalhoVerde/CabecalhoVerde";
import Funcionalidades from "../../components/Funcionalidades/Funcionalidades";
import { StyledIconeAdd, StylediconeCarro, StyledIconeContato } from "../../style/style-tela-inicial";
import { StyledCentraliza } from "../../style/styledGeral";


export default function Home() {

  document.title = "Home";

  return (
    <>
      <CabecalhoVerde titulo="Página inicial" />



      <BgInicial>

        <Funcionalidades nome="Seus veículos" link="./meus/veiculos"
          icone={<StylediconeCarro />} cor="#68ee86" />

        <Funcionalidades nome="Adicionar veículos" link="./adicionar/veiculos"
          icone={<StyledIconeAdd />} cor="#3da3d0" />

        <Funcionalidades nome="Obter Ajuda" link="./chatbot"
          icone={<StyledIconeContato />} cor="#68ee86" />

        <StyledCentraliza>
          <Button titulo="Integrantes" />
      </StyledCentraliza>
      </BgInicial>
    </>
  )
}
