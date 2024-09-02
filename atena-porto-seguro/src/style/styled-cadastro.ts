
import styled from 'styled-components';

export const StyleCabecalhoAzul = styled.header`
    display: flex;
    background-color: #3da3d0;
    padding: 2.6em;
    justify-content: center;
    position: static;
`;

export const StyleGradient = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: linear-gradient(to bottom, #68ee86, #3da3d0);
    flex-wrap: wrap;
    align-content: center;
    justify-content: start;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
    position: fixed;
`;

export const StyleIntegrantesInfo = styled.div`
    margin-top: 6vh;
    display: grid;
    grid-template-columns: 30vw 30vw 30vw;
    justify-items: center;

`;

export const StyleRepositorioContainer = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    border-radius: 32px;
    justify-content: center;
    align-items: center;
    gap: 1vw;
    border: inset 0.15vw rgb(153, 0, 255);
    margin-bottom: 6vh;
    width: 28vw;

    @media screen and (max-width: 761px) {
 
    font-size: 1vw;

    img {
      width: 3vw;
    }
  }

    @media screen and (max-width: 1440px) {

    font-size: 1.5vw;

    img {
      width: 4vw;
    }
  }

    @media screen and (max-width: 4400px) {
    font-size: 2vw;

    img {
      width: 5vw;
    }
  }

`;

export const StyleRodapeIntegrantes = styled.footer`
    margin-top: 4vh;
    font-size: 100%;
`;

export const StyleButtonRedefinir = styled.button`
    margin-top: 20vh;  
`;

export const StyleButtonEsqueci = styled.button`
    margin-top: 12vh;    
`;

export const StyleParagrafoCadastro = styled.p`
    margin-top: 16vh;
`;

export const StyleH2 = styled.h2`
    margin-top: 10vh;
`;

export const StyleInformativo = styled.p`
    margin-bottom: 8vh;
`;

