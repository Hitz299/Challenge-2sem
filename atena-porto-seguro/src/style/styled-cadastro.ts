
import styled from 'styled-components';

export const StyledCabecalhoAzul = styled.header`
    display: flex;
    background-color: #3da3d0;
    padding: 2.6em;
    justify-content: center;
    position: static;
`;

export const StyledGradient = styled.div`
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

export const StyledIntegrantesInfo = styled.div`
    margin-top: 6vh;
    display: grid;
    grid-template-columns: 30vw 30vw 30vw;
    justify-items: center;

`;

export const StyledIntegrantesTopo = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
gap: 30vw;

& h1 {
  margin-top: 8vh;
  font-size: 3vw;
}

& img {
  width: 20vw;
  margin-top: 8vh;
}

`

export const StyledRepositorioContainer = styled.div`
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


    &:hover
    {
      transition: all 0.2s ease-in-out;
      background-color: #000000;
    }

    & p{
      color:  rgb(153, 0, 255);


    }

    @media screen and (max-width: 761px) {
 
    font-size: 1vw;

    & img {
      width: 3vw;
    }
  }

    @media screen and (max-width: 1440px) {

    font-size: 1.5vw;

    & img {
      width: 4vw;
    }
  }

    @media screen and (max-width: 4400px) {
    font-size: 2vw;

    & img {
      width: 5vw;
    }
  }

`;

export const StyledRodapeIntegrantes = styled.footer`
    margin-top: 4vh;
    font-size: 100%;
`;

export const StyledButtonRedefinir = styled.button`
    margin-top: 20vh;  
`;

export const StyledButtonEsqueci = styled.button`
    margin-top: 12vh;    
`;

export const StyledParagrafoCadastro = styled.p`
    margin-top: 16vh;
`;

export const StyledH2 = styled.h2`
    margin-top: 10vh;
`;

export const StyledInformativo = styled.p`
    margin-bottom: 8vh;
`;

interface ImgIntegranteProps {
  largura: string,
}

export const StyledImgIntegrante = styled.img<ImgIntegranteProps>`

  border-radius: 10%;
  width: ${(props) => props.largura};
  position: relative;
  margin-bottom: 5vh;


`

export const StyledGitHub = styled.img`

  width: 12%

`