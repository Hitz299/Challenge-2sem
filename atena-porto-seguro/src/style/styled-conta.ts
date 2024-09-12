import styled from 'styled-components';


export const StyledInput = styled.input`

    width: 40vw;
    border: none;
    text-align: center;
    justify-items: center;
    padding: 0.6em 1.2em;
    font-size: 1.6em;
    border-radius: 32px;
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
    font-size: 1em;
    }
    
     @media screen and (max-width: 981px){
    font-size: 0.8em;
    }

    @media screen and (max-width: 761px){
    font-size: 0.65em;
    }

      @media screen and (max-width: 567px){
    font-size: 0.5em;
    }

`

export const StyledContainerDadosConta = styled.div`

    width: 22vw;
    height: 12vh;

`


export const StyledConta = styled.div`
    
    display: grid;
    justify-items: center;
    grid-template-columns: 30vw 30vw;
    grid-template-rows: 10vh 10vh 10vh;
    gap: 4vh;
    text-align: start;
    height: 52vh;
    margin-top: 6vh;
    color: white;

    `;


























