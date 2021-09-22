import React from "react";
import styled from "styled-components";
import axios from "axios";

const EstiloLista = styled.div`
  padding: 20px;
  margin: 20px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  justify-align: center;
  width: 300px;
`

export class PaginaLista extends React.Component {
  state={
    usuarios: []
  }
  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

      const headers = {
        headers: {
          Authorization: "carina-ferreira-maryam"
        }
      };

    axios
      .get(url, headers)
      .then((res) => {
        console.log(res)
        this.setState({ usuarios: res.data});
      })
      .catch((err) => {
        alert('Ocorreu um erro, tente novamente');
      });
  };

  deleteUser = (id) => {
    const url =`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id} ` ;

    const headers = {
      headers: {
        Authorization: "carina-ferreira-maryam"
      }
    };
    axios.delete(url, headers)
    .then((res) => {
      alert("O usuário foi deletado!")
      this.getAllUsers()

    })
    .catch((err) => {
      alert("Ocorreu um erro, tente novamente")

    });
  };

 
    render() {
        const listaUsuarios = this.state.usuarios.map((user) =>{
          return (
          <EstiloLista key={user.id}>
                       {user.name}
                       <button onClick = {() => this.deleteUser(user.id)}>X</button>
          </EstiloLista>
          )
        }) 

        return (
          <div>
            <button onClick = {this.props.voltarEtapa}>VOLTAR</button>
            <h3> Usuários Cadastrados </h3>
            {listaUsuarios}
    
          </div>
        );
      };
    }

    export default PaginaLista;
      