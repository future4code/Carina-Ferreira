import styled from 'styled-components'

export const PaginationStyle = styled.ul`
display:flex;
justify-content: center;
list-style: none;
`

export const ButtonStyle = styled.button`
border: none;
width: 3vH;
font-size: large;
display: flex;
margin-left: 2vW;
cursor: pointer;
color: #5C16C5;
:focus{
    background-color: lightgrey;
    transform: scale(2.1);
`