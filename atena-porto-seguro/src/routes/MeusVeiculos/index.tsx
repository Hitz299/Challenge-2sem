import BgGradient from "../../components/BgGradient/BgGradient";
import CabecalhoVerde from "../../components/CabecalhoVerde/CabecalhoVerde";
import MeusVeiculosComponent from "../../components/MeusVeiculosComponent/MeusVeiculosComponent";


export default function MeusVeiculos() {

    document.title = "Meus Veículos";

  return (
    <>
        <CabecalhoVerde titulo="Meus Veículos"/>
    
        <BgGradient>
        <MeusVeiculosComponent/>


        </BgGradient>
    </>
  )
}
