import styled from 'styled-components';


export const StyledInput = styled.input`

    width: 40vw;
    border: none;
    text-align: center;
    justify-items: center;
    padding: 0.6em 1.2em;
    font-size: 1.6em;
    border-radius: 0.6em;
    background-color: #cececea1;
    margin-top: 1vh;

    @media screen and (max-width: 961px) {
   
      width: 80vw !important;
    
  }
    `;

interface StyledContainerInfoContaProps {
    largura: number;
}

export const StyledContainerInfoConta = styled.div<StyledContainerInfoContaProps>`

    display: flex;
    padding-inline: 1vw;
    justify-content: space-between;
    align-items: center;
    width: ${(props) => props.largura}vw;
    height: 6vh;
    border: 3px solid #F23064;
    background-color: #262626;
    border-radius: 12px;
    color: white;


    @media screen and (max-width: 4400px){
    font-size: 100%;
    }
    
     @media screen and (max-width: 981px){
        font-size: 90%;
    width: ${(props) => props.largura + 10}vw;
    }

    @media screen and (max-width: 761px){
            font-size: 80%;

            width: ${(props) => props.largura + 15}vw;
    }

      @media screen and (max-width: 567px){
   font-size: 55%;
   width: ${(props) => props.largura + 20}vw;
    }

`

export const StyledContainerDadosConta = styled.div`

    width: 22vw;
    height: 12vh;

    & legend {
            white-space: nowrap;

        
    @media screen and (max-width: 4400px){
    font-size: 100%;
    }
    
     @media screen and (max-width: 981px){
        font-size: 90%;
    }

    @media screen and (max-width: 761px){
            font-size: 80%;

    }

      @media screen and (max-width: 567px){
   font-size: 70%;
    }
    }

`


export const StyledConta = styled.div`
    
    display: grid;
    justify-items: center;

    grid-template-rows: 10vh 10vh 10vh;
    
    text-align: start;
    height: 52vh;
    margin-top: 6vh;
    color: white;


    
    @media screen and (max-width: 4400px){
        grid-template-columns: 30vw 30vw;
        gap: 4vh 20vw;
    }
    
     @media screen and (max-width: 981px){
        grid-template-columns: 40vw 40vw;
        padding-right: 10vw;
        gap: 6vh 20vw;
    }



      @media screen and (max-width: 567px){
        grid-template-columns: 40vw 40vw;
        padding-right: 15vw;
         gap: 6vh 15vw;
    }

    `;


























