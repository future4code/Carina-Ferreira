import styled from 'styled-components';

export const EstiloHeader = styled.div `
background-color: #5C16C5;
position: absolute;
width: 100vW;
height: 7vH;
left: 0px;
top: 0px;
` 

export const EstiloLogo = styled.img`
width: 10vw;
position: absolute;
left: 10vW;
right: 0%;
top: 2vH;
bottom: 1vH;
cursor: pointer;
`
export const EstiloPainel = styled.div`
position: absolute;
width: 100vW;
height: 449px;
left: 0px;
top: 7vH;
background: #2D0C5E;
`

export const EstiloBotao = styled.button`
// display: flex;
// flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 16px;
cursor: pointer;

// position: absolute;
width: 7vw;
height: 40px;
left: 202px;
margin-top: 1vH;
text-align: center;
margin-left: 1vw;

/* Neutral Colors / Gray / Gray 000 */

background: #FFFFFF;
border-radius: 4px;

`

export const EstiloTexto = styled.p`
font-size: 4vW;
color: white;
position: absolute;
width: 60vW;
height: 10vH;
margin-left: 25vw;
margin-top: 10vh;
background-color:  #2D0C5E;
font-family: Roboto;
font-style: normal;
font-weight: bold;
// font-size: 4vw;
line-height: 56px;
letter-spacing: -0.005em;
`

export const TesteDiv = styled.div`
// width: 30vw;
// height: 10vH;
// display: flex;
margin-top: 40vH;
margin-left: 10vW;
`

export const TextoFiltro = styled.p`
position: absolute;
width: 50vW;
height: 20vH;
left: 50vW;
margin-top: 34vH;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 20px;

color: #FFFFFF;
`