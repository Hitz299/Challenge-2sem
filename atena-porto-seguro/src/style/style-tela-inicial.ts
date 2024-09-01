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
    background-image: url(../imgs/background-1280x985.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
    position: fixed;
`;

export const StyleIconeServico = styled.div`
     background-color: #ffffff;
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

export const StyleServico1 = styled.div`
    width: 100%;
    padding: 1.75vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    padding-inline: 10vw;
    background-color: #3da3d0;
    height: 10vh;
    width: 80vw;
    color: #ffffff;
    font-size: 3vw;

    img {
        position: relative;
        &:hover {
            transition: 1.1s ease-in;
            background-color: #68ee86;
        }
    }
`;

export const StyleServico2 = styled.div`
    padding: 1.25vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-inline: 10vw;
    align-items: center;
    background-color: #68ee86;
    height: 10vh;
    width: 80vw;
    color: #ffffff;
    font-size: 3vw;
    img {
        position: relative;
        &:hover {
            transition: 1.1s ease-in;
            background-color: #3da3d0;
        }
  }
`;

export const StyleServico3 = styled.div`
    padding: 1.75vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-inline: 10vw;
    background-color: #3da3d0;
    height: 10vh;
    width: 80vw;
    color: #ffffff;
    font-size: 3vw;
        align-items: center;
    img {
        position: relative;
        &:hover {
            transition: 1.1s ease-in;
            background-color: #68ee86;
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