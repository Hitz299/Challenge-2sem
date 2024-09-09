import { useNavigate } from "react-router-dom";
import BgInicial from "../../components/BgInicial/BgInicial";
import Button from "../../components/Button/Button";
import CabecalhoInicial from "../../components/CabecalhoInicial/CabecalhoInicial";
import Funcionalidades from "../../components/Funcionalidades/Funcionalidades";
import { StyledIconeAdd, StylediconeCarro, StyledIconeContato } from "../../style/style-tela-inicial";
import { StyledCentraliza } from "../../style/styledGeral";


export default function Home() {

  document.title = "Home";

  const navigate = useNavigate();

  const btnIntegrantes = () => {
    navigate("./integrantes");
  };

  return (
    <>
      <CabecalhoInicial titulo="Página inicial" />



      <BgInicial>


        <Funcionalidades nome="Seus veículos"
          icone={<StylediconeCarro />} cor="#68ee86" link="./meus/veiculos" />



        <Funcionalidades nome="Adicionar veículos"
          icone={<StyledIconeAdd />} cor="#3da3d0" link="./adicionar/veiculos" />



        <Funcionalidades nome="Obter Ajuda"
          icone={<StyledIconeContato />} cor="#68ee86" link="./chatbot" />

        <StyledCentraliza>
          <Button click={btnIntegrantes} titulo="Integrantes" />

        </StyledCentraliza>
      </BgInicial>
    </>
  )
}
