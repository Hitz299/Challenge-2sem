import styled from 'styled-components';
import { FaCar } from 'react-icons/fa';
import { GrAdd } from "react-icons/gr";
import { GrContact } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { IoPersonCircleOutline } from "react-icons/io5";

export const StylediconePerfil  = styled(IoPersonCircleOutline)`
      
    cursor: pointer;
    
    &:hover {
        transition: all 0.4s ease-in-out;
        color: aliceblue;
    }

     @media screen and (max-width: 4400px) { 
            width: 5em;
            height: 5em;
    }

     

       @media screen and (max-width: 761px) {
            width: 2em;
            height: 2em;
    }

    

`

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
  width: 1em;
`;

export const StyledServicosContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    text-align: center;
    width: 100vw;
    height: 100%;
    gap: 8vh;
    margin-top: 8vh;

`;

export const StyledFundoInicial = styled.div`
    display: flex;
    background-image: url(/background-1280x985.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100vw;
    height: 100vh;
    position: fixed;
`;

export const StyledIconeServico = styled.div`
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



export const StyledCabecalhoVerde = styled.header`

        
        display: flex;
        height: 10vh;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;    
        position: relative;
        padding-inline: 10vw;
        background-color: #68ee86;
        color: #3da3d0;

`;


export const StyledTituloServico = styled.h3`
  color: inherit;
  font-size: 0.9em;
  margin: 0;
`;


interface StyledServicoProps {
    color: string;
}

export const StyledServico = styled.div<StyledServicoProps>`


    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 8vw;
    color: #ffffff;
    background-color: ${(props) => props.color};
    cursor: pointer;
    border-radius: 0 100px  100px 0; 
    


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
       }

        @media screen and (max-width: 564px) {
            width: 320px;
            height: 80px;
            font-size: 14px;

    }
`
export const StyledLogoPorto = styled.img`
    @media screen and (max-width: 4400px) {
        width: 420px;
    }
    
    @media screen and (max-width: 1440px) {
        width: 300px;
    }
    
    @media screen and (max-width: 767px) {
        width: 160px;
}
`

export const StyledImgFundoIncial = styled.img`
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