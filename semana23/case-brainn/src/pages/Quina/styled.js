import styled from "styled-components";


export const SideBar = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width: 30vW;
height: 100vH;
background: #8666EF;
`


export const WhiteBar = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
width: 70vW;
height: 100vH;
border-radius: 10vW 0vW 0vW 10vW;
background-color: #EFEFEF
`


export const PageContainer = styled.div`
display: grid;
grid-template-columns: auto auto;
width: 100vW;
height: 100vH;
background: #8666EF;
`

export const Logo = styled.img`
width: 5vW;
height: 11vH;
margin-right: 2vw;
filter: brightness(0) invert(1);
transform: rotate(45deg)
`

export const Title = styled.p`
font-size: xX-large;
font-family: -webkit-pictograph;
display: flex;
color: white;
`

export const Text = styled.p`
font-size: medium;
font-family: -webkit-pictograph;
color: white;
`
export const TextStyle = styled.p`
font-size: small;
font-family: -webkit-pictograph;
margin-bottom: 8vH;
text-align: center;
margin-left: 5vW;
`

export const Numbers = styled.p`
width: 7vW;
height: 15vH;
border-radius: 10vW;
display: flex;
align-items: center;
justify-content: center;
font-size: x-large;
font-family: -webkit-pictograph;
background-color: white;
margin-bottom: 34vH;
`