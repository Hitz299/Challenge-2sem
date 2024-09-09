import styled from 'styled-components';

export const StyledContaContainer = styled.div`
    margin-top: 6vh;
    & h2 {
    text-align: center;
    margin-bottom: 5vh;
    }
`;

export const StyledConta = styled.div`
    
    display: grid;
    justify-items: center;
    grid-auto-flow: column;
    gap: 4vh;
    align-items: center;
    text-align: center;
    height: 52vh;
    `;

export const StyledInput = styled.input`

    width: 40vw;
    border: none;
    text-align: center;
    justify-items: center;
    padding: 0.6em 1.2em;
    font-size: 1.6em;
    border-radius: 32px;
    background-color: #cececea1;
    margin-top: 1vh;

    @media screen and (max-width: 961px) {
   
      width: 80vw !important;
    
  }
    `;

export const StyledButtonConta = styled.button`

    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-inline-start: 20vw;
    margin-right: 24vw;       
`;




























