import React from "react";
import styled from "styled-components";
import axios from "axios";





const CaixaDiv = styled.div`

display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-flex-direction: column;
-ms-flex-direction: column;
flex-direction: column;
border: 1px solid black;
width: 20%;
margin: 0 auto;
padding: 30px;
`

const headers = {
    headers: {
      Authorization: "carina-ferreira-maryam"
    }
  };

export class PaginaInicial extends React.Component {
    state = {
        listaUsuarios: [],
        nomeUsuario: '',
        emailUsuario: '',
    };
  


    alteraNomeUsuario = (e) => {
        this.setState({ nomeUsuario: e.target.value });
      };

    alteraEmailUsuario = (e) => {
        this.setState({ emailUsuario: e.target.value });
      };

    createUser = () => {
        const url =
          "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    
        const body = {
          name: this.state.nomeUsuario,
          email: this.state.emailUsuario
        };
    
        axios
          .post(url, body, headers)
          .then((res) => {
            this.setState({ nomeUsuario: "" });
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
      };


    render() {
        // const componentesUsuario = this.state.listaUsuarios.map((lista) => {
        //     return <li key={lista.id}>{lista.name}</li>;
        //   });
return (
    <div>
      <CaixaDiv>
        <label>Nome:</label>
        <input  type="text"
                placeholder = "Insira seu nome"
                value = {this.state.nomeUsuario}
                onChange={this.alteraNomeUsuario}
        />

        <label>Email:</label>
        <input  type="text"
                placeholder = "Insira seu email"
                value = {this.state.emailUsuario}
                onChange={this.alteraEmailUsuario}
        />
        <br/>
        <button onClick = {this.createUser}>Salvar</button>
        {/* {componentesUsuario} */}
      </CaixaDiv>
      
    </div>
  );
};
}

export default PaginaInicial;
