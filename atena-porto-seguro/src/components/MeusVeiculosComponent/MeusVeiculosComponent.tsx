// import { useState } from "react"
// import { listaVeiculos } from "../../script/listaVeiculos"
import { useState } from "react"
import { StyledAtributosVeiculo, StyledContainerAtributosEscritos, StyledContainerBtnsVeiculo, StyledImgVeiculo, StyledMeusVeiculosContainer, StyledVeiculo } from "../../style/styled-funcionalidades"
import Button from "../Button/Button"
import { listaVeiculos } from "../../script/listaVeiculos"


export default function MeusVeiculosComponent() {

    const [veiculos] = useState(listaVeiculos)

    

  return (
        <>

        <StyledMeusVeiculosContainer>

       
            
       {veiculos.map((veiculo) => (
                <StyledVeiculo key={veiculo.chassi}>
                    <figure>
                        <StyledImgVeiculo src={veiculo.img} alt={`${veiculo.modelo}}`} />
                    </figure>
                    <StyledAtributosVeiculo>
                        <StyledContainerAtributosEscritos>
                            <p>Modelo: {veiculo.modelo}</p>
                            <p>Cor: {veiculo.cor}</p>
                            <p>Placa: {veiculo.placa}</p>
                        </StyledContainerAtributosEscritos>
                        <StyledContainerBtnsVeiculo>
                            <Button titulo="Localizar" click={() => {}} />
                            <Button titulo="Excluir" click={() => {}} />
                        </StyledContainerBtnsVeiculo>
                    </StyledAtributosVeiculo>
                </StyledVeiculo>
            ))}
        
        
        </StyledMeusVeiculosContainer>
        </>

  )
}
