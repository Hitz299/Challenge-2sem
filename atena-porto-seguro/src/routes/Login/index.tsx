import BgGradient from "../../components/BgGradient/BgGradient";
import CabecalhoAzul from "../../components/CabecalhoAzul/CabecalhoAzul";
import FormularioLogin from "../../components/FormularioLogin/FormularioLogin";


export default function Login() {

    document.title = "Login";

  return (
    <>    
     <CabecalhoAzul/>
       <BgGradient>

        
        <FormularioLogin/>
       
      </BgGradient>
        
    </>
     
  )
}
