import CabecalhoVerde from "../../components/CabecalhoVerde/CabecalhoVerde";
import Localizar from "../../components/Localizar/Localizar";
import RodapeLocalizarVeiculos from "../../components/RodapeLocalizarVeiculos/RodapeLocalizarVeiculos";

export default function LocalizarVeiculos() {

    document.title = "Localizar Veículo";

  return (
    <>
    
      <CabecalhoVerde titulo="Localizar veículos"/>

      <Localizar>

         <RodapeLocalizarVeiculos/>

      </Localizar>
    </>
  )
}
