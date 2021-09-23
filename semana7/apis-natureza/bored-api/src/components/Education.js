import React from "react";
import styled from "styled-components";
import axios from "axios";

const EstiloBotao = styled.button`
  display: grid;
  width: 150px;
  height: 30px;
  margin: auto;
  text-align: center;
  align-items:center;
`


const EstiloBotao2 = styled.button`
  display: grid;
  width: 100px;
  height: 30px;
  align-items:center;
//   margin: auto;
//   text-align: center;
`

const P = styled.p`
font-size: 20px;
text-align: justify;
text-align: center;
`
const H3 = styled.h3`
text-align: center;
margin-top: 30px;
`
const DivAtividade = styled.div`
font-size: 20px;
text-align: justify;
// text-align: center;
`

  


export class Education extends React.Component {
    state = {
        activity: {}
      }
    
      getActivityType = () => {
        axios
          .get("https://www.boredapi.com/api/activity?type=education")
          .then((res) => {
            console.log(res.data);
            this.setState({activity: res.data})
          })
          .catch((err) => {
            console.log(err);
          });
      };
  render() {

    return (
      <div>
        <EstiloBotao2 onClick = {this.props.voltarParaPaginaInicial}> Voltar</EstiloBotao2>

        <P>Para gerar uma atividade de educação, clique no botão abaixo:</P>
        <div>
            <EstiloBotao onClick = {this.getActivityType}>Gerar atividade</EstiloBotao>
        </div>

        <H3>Atividade de Educação:</H3>
        <DivAtividade>
            <p>Nome: {this.state.activity.activity} </p>
            <p>Tipo: {this.state.activity.type}</p>
            <p>Participantes: {this.state.activity.participants} </p>
            <p>Preço: ${this.state.activity.price} </p>
        </DivAtividade>
      </div>
    );
  };
}

export default Education;