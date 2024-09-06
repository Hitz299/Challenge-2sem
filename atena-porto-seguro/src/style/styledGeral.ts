
import { Link } from "react-router-dom";
import { createGlobalStyle, styled } from "styled-components";


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
  font-size: 1.2em;
  position: absolute;
  
  

  &:hover{
    font-size: 1.6em;
    transition: font-size 0.1s ease-in;
    color: aliceblue;
  }
`;


export const StyleContainerEntrada = styled.div`
  
  display: flex;
  position: relative;
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

export const StyledLi = styled.li`
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
  font-size: 1.6em;
  width: 10vw;
  justify-content: center;
  align-items: center;



  &:hover {
    transition: 0.8s ease-in;
    background-color: #68ee86;
  }

  
  @media screen and (max-height: 741px) {
     height: 40px;
     width: 100px;
     font-size: 1.5em;
  }

  @media screen and (max-width: 761px) {
    height: 30px;
    width: 85px;
    font-size: 1.4em;
  }

  @media screen and (max-width: 981px) {
    height: 45px;
    width: 110px;
  }
`


export const StyleRodapeLink = styled.ul`
    display: flex;
    flex-direction: row;

    flex-wrap: wrap;
    text-align: center;
    gap: 3vh;
    justify-content: space-around;



      @media screen and (max-width: 567px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 8vh !important;
    }

    @media screen and (max-width: 1200px) {
      row-gap: 50vw;
    }

    

    @media screen and (max-width: 876px) {
      justify-content: center;
      align-items: center;
      gap: 40vw;
    }

`


