import BgGradient from "../../components/BgGradient/BgGradient";
import CabecalhoAzul from "../../components/CabecalhoAzul/CabecalhoAzul";
import IntegrantesTopo from "../../components/IntegrantesTopo/IntegrantesTopo";

export default function Integrantes() {

  document.title = "Integrantes";

  return (
    <>
      <CabecalhoAzul titulo="Integrantes" />

      <BgGradient>

        <IntegrantesTopo />


      </BgGradient>

    </>
  )
}
