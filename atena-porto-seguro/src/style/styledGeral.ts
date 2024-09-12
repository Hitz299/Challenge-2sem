
import { Link } from "react-router-dom";
import { createGlobalStyle, styled } from "styled-components";


export const StyledGeral = createGlobalStyle`

  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 1.2em;
  
  

  &:hover{
    font-size: 1.6em;
    transition: font-size 0.1s ease-in;
    color: aliceblue;
  }
`;




export const StyledContainerEntrada = styled.div`
  
  display: flex;
  flex-direction: column;
  text-align: start;
  align-items: center;
  margin: 0 auto;


  & label{
    margin-right: 30vw;
    margin-top: 5vh;

  @media screen and (max-width: 4400px) {
     font-size: 22px;
  }
  }


   @media screen and (max-width: 741px) {
     font-size: 20px;
     & label{

      margin-right: 50vw;
     }
  }
  
`;

export const StyledLi = styled.li`
  list-style-type: none;
`;


export const StyledButton = styled.button`
  display: block;
  padding: 0.2vw;
  background-color: #3da3d0;
  color: rgb(255, 255, 255);
  border-radius: 2em;
  border-color: #fdfdfdec;
  border-style: solid;
  cursor: pointer;
  margin: 8vh auto;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: 0.4s ease-in;
    background-color: #68ee86;
    color: black;
  }

  @media screen and (max-width: 4400px) {
     height: 50px;
     width: 180px;
    font-size: 100%;

  }

  @media screen and (max-width: 981px) {
    height: 50px;
    width: 110px;
    font-size: 90%;
  }

  @media screen and (max-width: 741px) {
     height: 40px;
     width: 100px;
    font-size: 80%;
  }
`

export const StyledListaDesordenada = styled.ul`
  display: flex;
  justify-content: space-around;  
  width: 100vw;           
   gap: 10vw;               

  @media screen and (max-width: 4400px) {
    flex-direction: row;
  }

  @media screen and (max-width: 567px) {
    flex-direction: column;
    align-items: center;
    gap: 8vh;            
  }
`;


export const StyledRodapeLink = styled.footer`
    display: flex;
    margin-top: 10vh ;       
`;


export const StyledCentraliza = styled.div`
margin: 0 auto;
display: block;
position: relative;
`;

export const StyledLinkExterno = styled.a`
  text-decoration: none;
  display: inline;

`;