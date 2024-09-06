import styled from 'styled-components';
import { FaCar } from 'react-icons/fa';
import { GrAdd } from "react-icons/gr";
import { GrContact } from "react-icons/gr";
import { Link } from 'react-router-dom';

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

export const StyledLinkServico = styled(Link)`
  text-decoration: none;
`;

export const StyleServicosContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100vw;
    height: 100%;
    gap: 10vh;
    margin-top: 5vh;

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
  margin: 0;
`;


interface StyleServicoProps {
    color: string; // Define o tipo da prop color
}

export const StyleServico = styled.div<StyleServicoProps>`


    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 8vw;
    color: #ffffff;
    background-color: ${(props) => props.color};
    cursor: pointer;
    border-radius: 0 100px  100px 0; 
    
    cursor: pointer;

    &:hover {
            background-color: #000000;
            transition: all 0.2s ease-in;
        }
    

    @media screen and (max-width: 4400px) {
            width: 1300px;
            height: 120px;
            font-size: 50px;
        
    }

     @media screen and (max-width: 1440px) {
            width: 700px;
            height: 100px;
             font-size: 30px;
         
    }

       @media screen and (max-width: 761px) {
            width: 400px;
            height: 80px;
             font-size: 20px;
          

        @media screen and (max-width: 564px) {
            width: 320px;
            height: 80px;
            font-size: 14px;

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