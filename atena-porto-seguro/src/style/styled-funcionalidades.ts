import styled from 'styled-components';



export const StyledCadastrarVeiculosContainer = styled.div`

 

    @media screen and (max-width: 4400px) {
       display: grid;
        grid-template-columns: 40vw 40vw;
        grid-template-rows: 20vh 20vh 20vh;
        gap: 3vh 10vw;
    }

   @media screen and (max-width: 981px) {
  
       grid-template-columns: 90vw;
        grid-template-rows: 10vh;
    gap: 1.1vh;


    & input{
      width: 70vw !important;
      height: 0.9em;
      font-size: 90%;
      padding: 3%;
      
    }
  }


`


export const StyledJanela = styled.dialog`

  
  margin: 0 auto;
  width: 20%;
  height: 30%;
  background: rgba(0, 0, 0, 0.4);
  margin-top: 20vh;

`;



export const StyledGradient = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: linear-gradient(to bottom, #68ee86, #3da3d0);
    flex-wrap: wrap;
    align-content: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
    position: fixed;
    `;



export const StyledChatContainer = styled.div`
display: flex;
flex-direction: column;

align-items: center;
height: 90vh;
width: 60vw;
margin: 1.6vw auto;
padding: 15px;
border-radius: 5px;
font-size: 1vw;

`;

export const StyledChatBox = styled.div`
position: static;
display: flex;
height: 55vh;
width: 85vw;
border: 3px solid #3da3d0;
padding: 0.1em;
color: #ffffff;
`;


export const StyledUserInput = styled.input `

 
  flex-shrink: 0;
  height: 8vh;
   width: 50vw;
    border: none;
    text-align: center;
    justify-items: center;
    padding: 0.6em 1.2em;
    font-size: 1.6em;
    border-radius: 32px;
    background-color: #cececea1;

    @media screen and (max-width: 981px) {
      width: 90vw;
  }


  
`

export const StyledContainerMensagem = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10vw;
    position: relative;

    @media screen and (max-width: 4400px) {
    gap: 10vw;
  }
    
 @media screen and (max-width: 981px) {
  padding-top: 6vh;
    gap: 1vh;
    flex-wrap: wrap;
  }
    
`


export const StyledNomeVeiculo = styled.div `
    display: block;
    text-align: center;
    align-content: center;
    font-size: 160%;
    font-weight: bold;
    background-color: #3da3d0;
    border-radius: 32px;
    width: 20vw;
    height: 6vh;
`;

export const StyledInfoVeiculo = styled.div `
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.2em;
    justify-content: center;
    align-items: center;
  `;
  
  export const StyledItemVeiculo = styled.div ` 
    background-color: #3da3d0;
    text-align: center;
    align-content: center;
    justify-content: center;
    border-radius: 32px;
    width: 12vw;
    height: 6vh;
    font-size: 2vw;
`;

export const StyledLocalizar = styled.div `
    background-image: url("/public/teste_maps.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
    align-content: end;
    position: fixed;
    flex-wrap: wrap;
    opacity: 0.9;
`;



export const StyledVeiculo = styled.div `
    display: flex;
    flex-direction: column;
    position: static;
    justify-content: center;
    text-align: center;
    background-color: #262626;
    border-radius: 42px 42px 12px 12px;

    &:hover{
      transition: all 0.25s ease-in;
      transform: scale(1.3);
    }
`;



export const StyledImgVeiculo = styled.img`
width: 100%;
border-radius: 42px 42px 0px 0px;
`


export const StyledAtributosVeiculo = styled.div `
    display: grid;
    grid-template-columns: 6vw 12vw;
    color: aliceblue;
    padding: 1.2%;
    padding-left: 3.5%;
`;

export const StyledMeusVeiculosContainer = styled.div `
    margin: 0 auto;
    display: flex;
     
    width: 10vw;
    padding: 10vh 10vw;
    gap: 4vw;
    margin-top: 6vh;
    justify-content: center;
    align-items: center;
    position: relative;
    text-align: center;
`;


export const StyledContainerAtributosEscritos = styled.div `
   
    display: flex;
    flex-direction: column;
    gap: 1vh;
    text-align: start;
    font-size: 80%;

`   
    
export const StyledContainerBtnsVeiculo = styled.div `
   
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

   & button{
      transform: scale(0.7);
      margin-top: 0vh 0vw!important;
      margin: 1vh;
      width: 5vw;
      position: relative;
      font-size: 100%;
   }

`

