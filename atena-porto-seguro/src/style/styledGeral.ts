import {styled, createGlobalStyle } from "styled-components"


export const StyleGeral = createGlobalStyle`

  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
`

export const StyleButton = styled.button`
  display: block;
  padding: 0.4vw;
  background-color: #3da3d0;
  color: rgb(255, 255, 255);
  border-radius: 2em;
  border-color: #fdfdfdec;
  border-style: solid;
  cursor: pointer;
  margin: auto;
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