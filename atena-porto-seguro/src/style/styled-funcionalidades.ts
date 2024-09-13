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
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 70%;
  height: 60%;
  background: rgba(0, 0, 0, 0.4);
  margin-top: 20vh;
  justify-content: center;
  gap: 3vh;
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
    background-image: url("/teste-maps.png");
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
      transition: all 0.15s ease-out;
      transform: scale(1.2);
    }
`;



export const StyledImgVeiculo = styled.img`
width: 100%;
border-radius: 42px 42px 0px 0px;
`


export const StyledAtributosVeiculo = styled.div `
    display: grid;
    color: aliceblue;
    padding: 1.2%;
    padding-left: 3.5%;

    @media screen and (max-width: 4400px) {
  
    grid-template-columns: 12.5vw 20vw;

  }

  @media screen and (max-width: 981px) {
   grid-template-columns: 20vw 30vw;
  }

    @media screen and (max-width: 541px) {
   grid-template-columns: 40vw 40vw;
  }
  
`;

export const StyledMeusVeiculosContainer = styled.div `
    margin: 2vh 20vw;
    display: flex;
    flex-direction: column;
    width: 30vw;
    height: 290vh;
    padding: 10vh 10vw;
    gap: 14vh;
    justify-content: start;
    align-items: center;
    position: relative;
    text-align: center;

`;


export const StyledContainerAtributosEscritos = styled.div `
   
    display: flex;
    flex-direction: column;
    text-align: start;

    
  @media screen and (max-width: 4400px) {
     height: 50px;
     width: 180px;
    gap: 1vh;
    font-size: 80%;

  }

  @media screen and (max-width: 981px) {
    height: 90px;
    width: 110px;
    font-size: 60%;
    gap: 3vh;
  }

  @media screen and (max-width: 741px) {
     height: 100px;
     width: 120px;
     gap: 4vh;
    font-size: 55%;
  }
`   
    
export const StyledContainerBtnsVeiculo = styled.div `
   
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

   & button{
      transform: scale(0.8);
      margin-top: 0vh 0vw!important;
      margin: 1vh;
      position: relative;
      font-size: 100%;

      
  @media screen and (max-width: 4400px) {
     width: 10vw;

  }

  @media screen and (max-width: 1440px) {
    width: 110px;

  }

  @media screen and (max-width: 741px) {

     width: 100px;
 
  }
      
      
         }

`

export const StyledFundoMeusVeiculos = styled.div`
    display: flex;
    background-color: #101010;
    text-align: center;
    justify-content: center;
    align-content: start;
    overflow-x: hidden;
    overflow-y: visible;
    background-position: center;
    width: 100%;
    height: 100%;
    position: fixed;
`;

export const StyledBtnLocalizarContainer = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10vh;
`