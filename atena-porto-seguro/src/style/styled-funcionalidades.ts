import styled from 'styled-components';

export const StyleGradient = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: linear-gradient(to bottom, #68ee86, #3da3d0);
    flex-wrap: wrap;
    align-content: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
    position: fixed;
    `;

export const StyleChatContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 54vh;
width: 60vw;
margin: 1.6vw auto;
padding: 15px;
border: 3px solid #3da3d0;
border-radius: 5px;
font-size: 1vw;

`;

export const StyleChatBox = styled.div`
position: static;
display: flex;
height: 30vh;
width: 50vw;
border: 3px solid #68ee86;
padding: 0.1em;
margin-bottom: 5vh;
color: #ffffff;
`;