import styled from 'styled-components';

export const StyleContaContainer = styled.div`
    margin-top: 6vh;
    h2 {
    text-align: center;
    margin-bottom: 5vh;
    }
`;

export const StyleConta = styled.div`
    
    display: grid;
    justify-items: center;
    grid-auto-flow: column;
    gap: 4vh;
    align-items: center;
    text-align: center;
    height: 52vh;
    `;

export const StyleInput = styled.input`

    
    height: 3.6em;
    border: none;
    text-align: center;
    justify-items: center;
    padding: 0.6em 1.2em;
    font-size: 1.6em;
    border-radius: 32px;
    background-color: #cececea1;
    margin-top: 1vh;width: 20vw !important;
    `;

export const StyleButtonConta = styled.button`

    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-inline-start: 20vw;
    margin-right: 24vw;       
`;


export const StyleMedia = styled.media`
    @media screen and (max-width: 4400px) {
        #conta {
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 20vh 20vh;
        }
        #btn-conta div {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            width: 14vw;
            img {
                width: 45px;
                height: 45px;
            }
        }

        button {
            height: 60px;
            width: 200px;
        }

        .cabecalho-verde {
            display: flex;
            height: 6rem;
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
    }
`;

export const StyleMedia2 = styled.media`
    @media screen and (max-width: 1440px) {
        #conta {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 12vh 12vh 12vh;
            font-size: 75%;

            input {
                height: 4vh;
            }
        }

        button {
            height: 40px;
            width: 160px;
            margin-left: 10vw;
        }

        #btn-conta div {
            display: flex;
            flex-direction: column;
            font-size: 75%;
            text-align: center;
            align-items: center;

            img {
            width: 30px;
            height: 30px;
            }
        }

        .cabecalho-verde {
            display: flex;
            height: 6rem;
            flex-direction: row;
            justify-content: start;
            align-items: center;
            position: relative;
            background-color: #68ee86;
            background-image: url(../imgs/logo-portoseguro.webp);
            background-size: 22rem;
            background-position: right;
            background-repeat: no-repeat;
            padding-left: 5vw;
            color: #3da3d0;
            font-size: 2vw;
        }
    }
`;

export const StyleMedia3 = styled.media`
    @media screen and (max-width: 761px) {
        button {
            margin-left: 20vw;
        }
    }
`;


































