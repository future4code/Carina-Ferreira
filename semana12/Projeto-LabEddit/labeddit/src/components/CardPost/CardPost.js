import React from "react";
import styled from 'styled-components'

const ContainerCard=styled.div`
display: flex;
flex-direction: column;
align-items: center;
border: 2px solid black;
width: 250px;
height: 100px;
margin: 16px;
background-color: white;
border-radius: 15px;
margin-left: 40px;
text-transform: capitalize
`

const CardPost = () => {

    
  return (
    <div>
        <h2>Meu feed:</h2>
        <ContainerCard>
            <p>OI, EU SOU UM POST FOFiNHO</p>
        </ContainerCard>
    </div>
  );
}

export default CardPost;
