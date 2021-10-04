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


const EstiloBotao = styled.button`
width: 100px;
`


export class PaginaCadastro extends React.Component {
    state = {
        listaPlaylists: [],
        nomePlaylist: '',
    };



    adicionaNovaPlaylist = (e) => {
        this.setState({ nomePlaylist: e.target.value });
      };


    createPlaylist = () => {
        const url =
          "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

        const body = {
          name: this.state.nomePlaylist,
        };

        const headers = {
          headers: {
            Authorization: "carina-ferreira-maryam"
          }
        };

        axios
          .post(url, body, headers)
          .then((res) => {
            this.setState({ nomePlaylist: "", });
                alert("Playlist adicionada!")
          })
          .catch((err) => {
            alert("Insira um nome válido!");
          });
      };


    render() {

return (
    <div>
      <EstiloBotao onClick={this.props.irParaProximaEtapa}>Ver minhas playlists</EstiloBotao>
      <CaixaDiv>
        <h3>Nova Playlist:</h3>
        <label>Nome:</label>
        <input  type="text"
                placeholder = "Insira o nome da playlist"
                value = {this.state.nomePlaylist}
                onChange={this.adicionaNovaPlaylist}
        />

        <br/>
        <button onClick = {this.createPlaylist}>Criar</button>
      </CaixaDiv>

      

    </div>
  );
};
}

export default PaginaCadastro;