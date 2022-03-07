import styled from 'styled-components';

export const CardContainer = styled.div`
width: 100%;
height: 100vH;
// border: 1px solid black;
margin-bottom: 2vH;
cursor: pointer;
`

export const ImgContainer = styled.img`
width: 5vW;
border: 1px solid black;
padding: 2px;
margin-left: 2vW;
margin-right: 2vW;
`

export const LikeContainer = styled.img`
width: 4vW;
// padding: 2px;
margin-left: 7vW;
margin-right: 1vW;
`

export const TitleContainer = styled.div`
display: flex;
align-items: baseline;
`
export const ViewCount = styled.img`
width: 6vW;
margin-right: 2vW;
`

export const CountContainer = styled.div`
display: flex;
align-items: baseline;
`

export const Description = styled.div`
overflow: hidden; // Removendo barra de rolagem
text-overflow: ellipsis; // Adicionando "..." ao final
display: -webkit-box;
-webkit-line-clamp: 5; // Quantidade de linhas
-webkit-box-orient: vertical;
`
