import BgInicial from "../../components/BgInicial/BgInicial";
import Button from "../../components/Button/Button";
import CabecalhoVerde from "../../components/CabecalhoVerde/CabecalhoVerde";
import Funcionalidades from "../../components/Funcionalidades/Funcionalidades";
import { StyledIconeAdd, StylediconeCarro, StyledIconeContato, StyledLinkServico } from "../../style/style-tela-inicial";
import { StyledCentraliza, } from "../../style/styledGeral";


export default function Home() {

  document.title = "Home";

  return (
    <>
      <CabecalhoVerde titulo="Página inicial" />



      <BgInicial>

        <StyledLinkServico to = "./meus/veiculos">
        <Funcionalidades nome="Seus veículos"
          icone={<StylediconeCarro />} cor="#68ee86" />
      </StyledLinkServico>

 <StyledLinkServico to = "./adicionar/veiculos">
        <Funcionalidades nome="Adicionar veículos"
          icone={<StyledIconeAdd />} cor="#3da3d0" />
</StyledLinkServico>

<StyledLinkServico to = "./chatbot">
        <Funcionalidades nome="Obter Ajuda"
          icone={<StyledIconeContato />} cor="#68ee86" />
</StyledLinkServico>
        <StyledCentraliza>
          <Button titulo="Integrantes" />
      </StyledCentraliza>
      </BgInicial>
    </>
  )
}
