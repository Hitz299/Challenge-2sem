import BgGradient from "../../components/BgGradient/BgGradient";
import CabecalhoAzul from "../../components/CabecalhoAzul/CabecalhoAzul";
import InfoIntegrantes from "../../components/InfoIntegrantes/InfoIntegrantes";
import IntegrantesTopo from "../../components/IntegrantesTopo/IntegrantesTopo";

export default function Integrantes() {

  document.title = "Integrantes";

  return (
    <>
      <CabecalhoAzul titulo="Integrantes" />

      <BgGradient>

        <IntegrantesTopo />
        <InfoIntegrantes/>
        

      </BgGradient>

    </>
  )
}
