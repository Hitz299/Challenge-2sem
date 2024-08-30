import styled from 'styled-components';

export const StyleGradient = styled.div`
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

export const StyleChatContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 54vh;
width: 60vw;
margin: 1.6vw auto;
padding: 15px;
border: 3px solid #3da3d0;
border-radius: 5px;
font-size: 1vw;

`;

export const StyleChatBox = styled.div`
position: static;
display: flex;
height: 30vh;
width: 50vw;
border: 3px solid #68ee86;
padding: 0.1em;
margin-bottom: 5vh;
color: #ffffff;
`;

export const StyleMeusVeiculosContainer = styled.div `
    display: block;
    background-color: #d4d4d4;
    padding-top: 3vh;
    height: 120vh;
    width: 100vw;
`;

export const StyleVeiculosContainer = styled.div `
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

export const StyleNomeVeiculo = styled.div `
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

export const StyleInfoVeiculo = styled.div `
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.2em;
    justify-content: center;
    align-items: center;
  `;
  
  export const StyleItemVeiculo = styled.div ` 
    background-color: #3da3d0;
    text-align: center;
    align-content: center;
    justify-content: center;
    border-radius: 32px;
    width: 12vw;
    height: 6vh;
    font-size: 2vw;
`;