
import styled from 'styled-components';

export const StyledCabecalhoAzul = styled.header`
    display: flex;
    background-color: #3da3d0;
    padding: 0.8em;
    justify-content: center;
    position: static;
`;

export const StyledGradient = styled.div`
    width: 100vw;
    height: 100vh;
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
    margin-top: 4vh;
    display: grid;
    grid-template-columns: 30vw 30vw 30vw;
    justify-items: center;
    gap: 3vh;
`;

export const StyledIntegrantesTopo = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
gap: 30vw;
margin-top: 4vh;

& h1 {

  font-size: 3vw;
}

& img {
  width: 20vw;
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
    cursor: pointer;

    &:hover
    {
      transition: all 0.2s ease-in-out;
      background-color: #CECECE76;
    }

    & p{
      color:  rgb(153, 0, 255);


    }

    @media screen and (max-width: 4400px) {
    font-size: 2vw;

    & img {
      width: 5vw;
    }
  }

    @media screen and (max-width: 1440px) {

    font-size: 1.5vw;

    & img {
      width: 4vw;
    }

    @media screen and (max-width: 761px) {
 
    font-size: 1vw;

    & img {
      width: 3vw;
    }
  }
  }

`;

export const StyledRodapeIntegrantes = styled.footer`
    margin-top: 5vh;
    font-size: 100%;
    display: flex;
    height: 10vh;
    flex-direction: column;
    align-items: center;
    
    

`;

export const StyledListaGitHub = styled.footer`

  display: grid;
  grid-template-columns: 30vw 30vw 30vw;
  justify-content: center;
    gap: 3vh;
    align-items: center;

`

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