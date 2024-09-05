import styled from 'styled-components';

export const StyleServicosContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3em;
    margin-top: 3%;
    img {
        width: 130%;
    }
`;

export const StyleFundoInicial = styled.div`
    display: flex;
    background-image: url(/public/background-1280x985.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100vw;
    height: 100vh;
    position: fixed;
`;

export const StyleIconeServico = styled.div`
     background-color: #000000;
     border-radius: 32px;
`;

export const StyledIconeConta = styled.div`
    width: 5%;
`;

export const StyleCabecalhoVerde = styled.header`
    display: flex;
    height: 10vh;
     flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: #68ee86;
    align-self: center;
    background-image: url(../imgs/logo-portoseguro.webp);
    background-size: 20rem;
    background-position: center;
    background-repeat: no-repeat;
  img {
        background-color: #ffffff;
        border-radius: 32px;
        margin-left: 5vw;
        border: 0.4vw solid #3da3d0;
    }

      @media screen and (max-width: 4400px) {
       
            display: flex;
            height: 10vh;
            flex-direction: row;
            justify-content: start;
            align-items: center;
            position: relative;
            background-color: #68ee86;
            background-image: url(../imgs/logo-portoseguro.webp);
            background-size: 22rem;
            background-position: center;
            background-repeat: no-repeat;
            padding-left: 5vw;
            color: #3da3d0;
            font-size: 1vw;
        }
`;


interface StyleServicoProps {
    color: string; // Define o tipo da prop color
}

export const StyleServico = styled.div<StyleServicoProps>`
    width: 100%;
    padding: 1.75vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    background-color:${(props) => props.color};
    height: 10vh;
    color: #ffffff;
    font-size: 3vw;

    img {
        position: relative;
            transition: 1.1s ease-in;
        &:hover {
            background-color: ${(props) => props.color};
        }
    }
`;

export const StyleImgFundoIncial = styled.img`
@media screen and (max-width: 4400px) {
width: 50px;
}

@media screen and (max-width: 1440px) {
width: 40px;
}

@media screen and (max-width: 767px) {
    width: 35px;
}

`