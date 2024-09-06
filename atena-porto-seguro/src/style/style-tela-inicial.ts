import styled from 'styled-components';
import { FaCar } from 'react-icons/fa';
import { GrAdd } from "react-icons/gr";
import { GrContact } from "react-icons/gr";

export const StylediconeCarro  = styled(FaCar)`
  
    
     @media screen and (max-width: 4400px) { 
            width: 1em;
            height: 1em;
    }

     @media screen and (max-width: 1440px) {
        width: 1em;
        height: 1em;
    }

       @media screen and (max-width: 761px) {
            width: 2em;
            height: 2em;
    }

        @media screen and (max-width: 564px) {  
            width: 2em;
            height: 2em;
    }

`;  

export const StyledIconeAdd  = styled(GrAdd)`
  
     @media screen and (max-width: 4400px) { 
            width: 1em;
            height: 1em;
    }

     @media screen and (max-width: 1440px) {
        width: 1em;
        height: 1em;
    }

       @media screen and (max-width: 761px) {
            width: 2em;
            height: 2em;
    }

        @media screen and (max-width: 564px) {  
            width: 2em;
            height: 2em;
    }
`;

export const StyledIconeContato  = styled(GrContact)`
    @media screen and (max-width: 4400px) { 
            width: 1em;
            height: 1em;
    }

     @media screen and (max-width: 1440px) {
        width: 1em;
        height: 1em;
    }

       @media screen and (max-width: 761px) {
            width: 2em;
            height: 2em;
    }

        @media screen and (max-width: 564px) {  
            width: 2em;
            height: 2em;
    }
`;


export const StyleServicosContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100vw;
    height: 100vh;
    gap: 10vh;
    padding-bottom: 20vh;
    margin-top: 2.5%;

`;

export const StyleFundoInicial = styled.div`
    display: flex;
    background-image: url(/public/background-1280x985.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-width: 100px;
    max-width: 120rem;
    position: fixed;
`;

export const StyleIconeServico = styled.div`
     background-color: #000000;
     border-radius: 100%;
     display: block;
     justify-content: center;
     align-items: center;
     text-align: center;


     @media screen and (max-width: 4400px) { 
            padding: 12px;
            width: 1.6em;
            height: 1.6em;
    }

     @media screen and (max-width: 1440px) {
        padding: 8px;
        width: 1.6em;
        height: 1.6em;
    }

       @media screen and (max-width: 761px) {
            padding: 6px;
            width: 2.8em;
            height: 2.8em;
    }

        @media screen and (max-width: 564px) {  
            padding: 4px;
            width: 3.4em;
            height: 3.4em;
    }

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
            font-size: 1.4em;
        }
`;

export const StyledTituloServico = styled.h3`
  color: inherit;
  font-size: 0.9em;
  position: absolute;
  
`;


interface StyleServicoProps {
    color: string; // Define o tipo da prop color
}

export const StyleServico = styled.div<StyleServicoProps>`

    padding-inline: 100px;
    display: block;
    justify-content: center;
    align-content: center;
    background-color:${(props) => props.color};
    height: 10vh;
    color: #ffffff;
    margin-top: 2vh;
    cursor: pointer;

    &:hover {
            background-color: #000000;
            transition: all 0.2s ease-in;
        }
    

    @media screen and (max-width: 4400px) {
            width: 1300px;
            height: 120px;
            font-size: 50px;
            gap: 1000px;
    }

     @media screen and (max-width: 1440px) {
            width: 700px;
            height: 100px;
             font-size: 30px;
            gap: 560px;
    }

       @media screen and (max-width: 761px) {
            width: 400px;
            height: 80px;
             font-size: 20px;
             gap: 300px;
    }

        @media screen and (max-width: 564px) {
            width: 320px;
            height: 80px;
            font-size: 14px;
            gap: 250px;
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