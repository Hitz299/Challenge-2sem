
// import {useState} from "react";
import BgGradient from "../../components/BgGradient/BgGradient";
// import Button from "../../components/Button/Button";
import CabecalhoVerde from "../../components/CabecalhoVerde/CabecalhoVerde";
import FormularioCadastroVeiculo from "../../components/FormularioCadastroVeiculo/FormularioCadastroVeiculo";


export default function AdicionarVeiculos() {

    document.title = "Cadastrar Veículos";


  return (
    <>
      <CabecalhoVerde titulo="Adiconar Veículos"/>


      <BgGradient>

         <FormularioCadastroVeiculo/>
          

      </BgGradient>
    </>
  )
}
