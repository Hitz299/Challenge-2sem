import BgGradient from "../../components/BgGradient/BgGradient";
import CabecalhoAzul from "../../components/CabecalhoAzul/CabecalhoAzul";
import InfoIntegrantes from "../../components/InfoIntegrantes/InfoIntegrantes";
import IntegrantesTopo from "../../components/IntegrantesTopo/IntegrantesTopo";
import RodapeIntegrantes from "../../components/RodapeIntegrantes/RodapeIntegrantes";

export default function Integrantes() {

  document.title = "Integrantes";

  return (
    <>
      <CabecalhoAzul titulo="Integrantes" />
      <BgGradient>

        <IntegrantesTopo />
        <InfoIntegrantes />
        <RodapeIntegrantes link="https://github.com/Hitz299/Challenge-2sem/tree/front" />

      </BgGradient>

    </>
  )
}
