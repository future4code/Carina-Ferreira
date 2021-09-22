import React from "react";
import styled from "styled-components";
import axios from "axios";

const headers = {
  headers: {
    Authorization: "carina-ferreira-maryam"
  }
};

export class PaginaLista extends React.Component {
  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ listaUsuarios: res.data.result.list });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  listaUsuarios = this.props.listaUsuarios
  // listaUsuarios = this.props.listaUsuarios.map(() => 
    render() {
      
        return (
          <div>
            <button onClick = {this.irParaProximaPagina}>VOLTAR</button>
            <div>
              <h3> Usuários Cadastrados </h3>
            </div>
    
          </div>
        );
      };
    }

    export default PaginaLista;
      