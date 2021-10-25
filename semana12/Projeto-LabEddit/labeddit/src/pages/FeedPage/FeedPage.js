import React from "react";
import styled from 'styled-components'
import CardPost from '../../components/CardPost/CardPost'

const ContainerCard=styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 2px solid black;
width: 250px;
height: 130px;
margin: 16px;
background-color: white;
border-radius: 15px;
margin-left: 40px;
margin-top: 20px;
text-transform: capitalize
`

const FeedPage = () => {

  return (
    <div>
        <h2>SIGN UP</h2>
        <ContainerCard>
        <input
        placeholder = 'Escreva seu post aqui!'
        value = ''
        // onChange = {onChangeName}
        />
        <br/>
        <button> POSTAR </button>
        </ContainerCard>
        <CardPost/>
    </div>
  );
}

export default FeedPage;
