
import React, {useState} from "react";
import BgGradient from "../../components/BgGradient/BgGradient";
import Button from "../../components/Button/Button";
import CabecalhoVerde from "../../components/CabecalhoVerde/CabecalhoVerde";


export default function AdicionarVeiculos() {

    document.title = "Cadastrar Veículos";

    const [icones, setIcones] = useState<JSX.Element[]>([]);

  const adicionarIcone = () => {
    let index: number  = 0;
    setIcones([...icones, <Button titulo="aaa" click={() => {}} key={index} />]);
    index ++;
  };

  return (
    <>
      <CabecalhoVerde titulo="Adiconar Veículos"/>


      <BgGradient>


          <Button titulo="Criar" click={adicionarIcone}/>

           <div>
          {icones.map((icone, index) => (
            <div key={index}>{icone}</div>
          ))}
        </div>

      </BgGradient>
    </>
  )
}
