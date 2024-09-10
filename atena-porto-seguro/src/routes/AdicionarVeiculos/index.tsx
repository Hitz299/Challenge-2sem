
// import {useState} from "react";
import BgGradient from "../../components/BgGradient/BgGradient";
// import Button from "../../components/Button/Button";
import CabecalhoVerde from "../../components/CabecalhoVerde/CabecalhoVerde";
import FormularioCadastroVeiculo from "../../components/FormularioCadastroVeiculo/FormularioCadastroVeiculo";


export default function AdicionarVeiculos() {

    document.title = "Cadastrar Veículos";

  //   const [icones, setIcones] = useState<JSX.Element[]>([]);

  // const adicionarIcone = () => {
  //   let index: number  = 0;
  //   setIcones([...icones, <Button titulo="aaa" click={() => {}} key={index} />]);
  //   index ++;
  // };

  // const DeletarIcone = () => {
    
  //   setIcones((icones) => icones.slice(0, -1));
 
  // };

  return (
    <>
      <CabecalhoVerde titulo="Adiconar Veículos"/>


      <BgGradient>

         <FormularioCadastroVeiculo/>
          

      </BgGradient>
    </>
  )
}
