import styled from 'styled-components'

export const CaixaDiv = styled.div`
background-color: pink;
display: flex;
justify-content: center;
flex-direction: column;
border: 10px solid black;
border-radius: 15px;
width: 25%;
height: 80%;
position: fixed;
margin-left: 550px;
padding: 30px;
`
export const AvisoClear = styled.p`
font-size: xx-large;
text-align: center;
`

export const EstiloImagem = styled.img`
width: 60%;
height: 50%;
display: flex;
justify-content: center;
align-self: center;
`
export const EstiloP = styled.p`
font-size: xx-large;
text-align: center;
margin-left: 70px;
margin-top: 270px;
position: absolute;
color: white; 
text-shadow: black 0.2em 0.2em 0.3em;
`
export const EstiloDivBio = styled.div`
font-size: large;
text-align: center;
`

export const ImgBotao = styled.img`
width: 60px;
background-color:white;
border-radius: 50px;
margin-bottom: 2px;
`
export const ImgBottonFlame = styled.img`
width: 60px;
background-color:pink;
border-radius: 50px;
margin-bottom: 2px;
`

export const EstiloH3 = styled.h3`
margin: 0;
padding: 5px;
font-size: xxx-large;
text-align: center;
`

export const DivBotoes = styled.button`
display:flex;
background-color:pink;
border: white;
border-color: pink;
justify-content: space-between;
margin-left: 15px;
margin-right: 15px;
`

export const EstiloBotao = styled.button`
border-radius: 50px;
border-color: pink;
background-color: pink;
display: flex;
justify-content: space-evenly;
width: 50px;
height:60px;
cursor: pointer;
:hover {
    transform: scale(1.5);
    transition: all 0.5s;
  } 
`