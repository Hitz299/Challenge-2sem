import BgInicial from "../../components/BgInicial/BgInicial";
import CabecalhoVerde from "../../components/CabecalhoVerde/CabecalhoVerde";
import { FaCar } from "react-icons/fa";

export default function Home() {

  document.title = "Home";

  return (
    <>
      <CabecalhoVerde titulo="Página inicial" />
      <BgInicial>

          <FaCar/>

      </BgInicial>
    </>
  )
}
