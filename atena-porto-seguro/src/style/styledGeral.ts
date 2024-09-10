
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
  position: absolute;
  
  

  &:hover{
    font-size: 1.6em;
    transition: font-size 0.1s ease-in;
    color: aliceblue;
  }
`;




export const StyledContainerEntrada = styled.div`
  
  display: flex;
  position: relative;
  flex-direction: column;
  text-align: start;
  align-items: start;



  & label{
    margin-left: 5%;
    margin-top: 5vh;

  @media screen and (max-width: 4400px) {
     font-size: 22px;
  }
  }


   @media screen and (max-width: 741px) {
     font-size: 20px;
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
     font-size: 1.5em;
  }

  @media screen and (max-width: 981px) {
    height: 50px;
    width: 110px;
    font-size: 30px;
  }

  @media screen and (max-width: 741px) {
     height: 40px;
     width: 100px;
     font-size: 14px;
  }
`

export const StyledRodapeLink = styled.ul`
    display: flex;
    flex-direction: row;

    flex-wrap: wrap;
    text-align: center;
    gap: 3vh;
    justify-content: space-around;



    @media screen and (max-width: 1200px) {
      row-gap: 50vw;
    }


    @media screen and (max-width: 876px) {
      justify-content: center;
      align-items: center;
      gap: 40vw;
    }


      @media screen and (max-width: 567px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 8vh !important;
    }

    

`

export const StyledCentraliza = styled.div`

display: block;
position: relative;
text-align: center;
align-items: center;
justify-content: center;
width: 100vw;
`;

export const StyledLinkExterno = styled.a`
  
  text-decoration: none;
`;