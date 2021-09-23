import React from 'react';
import styled from "styled-components";
// import axios from "axios";

const EstiloDivBotao = styled.div`
  display: grid;
  width: 50px;
  margin: auto;
`
const P = styled.p`
font-size: 20px;
text-align: justify;
text-align: center;
`
const H2 = styled.h2`
text-align: center;
margin-top: 100px;
`



export class PaginaInicial extends React.Component {

  render() {

    return (
      <div>

        <H2>Seja bem vindo(a) ao Bored!</H2>
        <P>Aqui nós te tiramos do tédio. Selecione abaixo algum tipo de atividade que gostaria de fazer, a partir disso iremos selecionar
          tarefas aleatórias especialmente para você!
        </P>
        
        <EstiloDivBotao>
          <button onClick = {this.props.irParaProximaPagina}>Education</button> 
          <br/>
          <button onClick = {this.props.irParaPaginaDiy}>DIY</button> 
          <br/>
          <button onClick = {this.props.irParaPaginaRecreational}>Recreational</button> 
          <br/>
          <button onClick = {this.props.irParaPaginaCharity}>Charity</button> 
          <br/>
          <button onClick = {this.props.irParaPaginaCooking}>Cooking</button> 
        </EstiloDivBotao>
      </div>
    );
  };
}

export default PaginaInicial;