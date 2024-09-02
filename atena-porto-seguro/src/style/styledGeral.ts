
import { Link } from "react-router-dom";
import {styled, createGlobalStyle } from "styled-components"


export const StyleGeral = createGlobalStyle`

  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 160%;

  &:hover{
    color: aliceblue;
    font-size: 200%;
    transition: all 0.15s ease-in;
  }
`;


export const StyleLink = styled.a`
text-decoration: none;
    color: aliceblue;
`

export const  StyleContainerEntrada = styled.div`
  
  display: flex;
  flex-direction: column;
  text-align: start;
  align-items: start;



  label{
    margin-left: 5%;
    margin-top: 5vh;

   @media screen and (max-height: 741px) {
     font-size: 20px;
  }

  @media screen and (max-height: 4400px) {
     font-size: 22px;
  }
  }

  
`;

export const StyledLi= styled.li`
  list-style-type: none; 
`;


export const StyleButton = styled.button`
  display: block;
  padding: 0.4vw;
  background-color: #3da3d0;
  color: rgb(255, 255, 255);
  border-radius: 2em;
  border-color: #fdfdfdec;
  border-style: solid;
  cursor: pointer;
  margin: 8vh auto;
  font-size: 1.6vw;
  width: 10vw;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: aliceblue;
  }


  &:hover {
    transition: 0.8s ease-in;
    background-color: #68ee86;
  }

  
  @media screen and (max-height: 741px) {
     height: 40px;
  }

  @media screen and (max-width: 761px) {
    height: 30px;
  }

  @media screen and (max-width: 981px) {
    height: 45px;
  }
`


  export const StyleRodapeLink  = styled.ul`
    display: flex;
    flex-direction: row;

    flex-wrap: wrap;
    text-align: center;

    

    @media screen and (max-width: 4400px) {
      flex-direction: row;
      justify-content: space-between;
    }

      @media screen and (max-width: 1920px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4vh;
    }

` 


