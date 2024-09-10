import styled from 'styled-components';



export const StyledCadastrarVeiculosContainer = styled.div`

  display: grid;
  grid-template-columns: 40vw 40vw;
  grid-template-rows: 20vh 20vh 20vh;
  gap: 3vh 10vw;

   @media screen and (max-width: 981px) {
  
    grid-template-columns: 50vw;
    
  }


`





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

export const StyledMeusVeiculosContainer = styled.div `
    display: block;
    background-color: #d4d4d4;
    padding-top: 3vh;
    height: 120vh;
    width: 100vw;
`;

export const StyledVeiculosContainer = styled.div `
    margin-top: 6vh;
    display: grid;
    height: 62vh;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 30vh 30vh;
    justify-items: center;
    align-items: center;
    column-gap: 1vw;
    row-gap: 5vw;        
    
     
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


  

       
    


