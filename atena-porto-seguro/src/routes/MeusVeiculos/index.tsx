import BgMeusVeiculos from "../../components/BgMeusVeiculos/BgMeusVeiculos";
import CabecalhoVerde from "../../components/CabecalhoVerde/CabecalhoVerde";
import MeusVeiculosComponent from "../../components/MeusVeiculosComponent/MeusVeiculosComponent";


export default function MeusVeiculos() {

    document.title = "Meus Veículos";

  return (
    <>
        <CabecalhoVerde titulo="Meus Veículos"/>
    
        <BgMeusVeiculos>
        <MeusVeiculosComponent/>


        </BgMeusVeiculos>
    </>
  )
}
