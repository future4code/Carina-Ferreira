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
    playlists: []
  }

  componentDidMount() {
    this.getAllPlaylists();
  }

  getAllPlaylists = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

      const headers = {
        headers: {
          Authorization: "carina-ferreira-maryam"
        }
      };

    axios
      .get(url, headers)
      .then((res) => {
        console.log(res)
        this.setState({ playlists: res.data.result.list});
      })
      .catch((err) => {
        alert('Ocorreu um erro, tente novamente');
      });
  };

  deletePlaylist = (id) => {
    const url =`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id} ` ;

    const headers = {
      headers: {
        Authorization: "carina-ferreira-maryam"
      }
    };
    axios.delete(url, headers)
    .then((res) => {
      console.log("O usuário foi deletado!")
      this.getAllPlaylists()

    })
    .catch((err) => {
      console.log("Ocorreu um erro, tente novamente")

    });
  };

  getPlaylistTracks = (id) => {
    const url =
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        // 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks'

      const headers = {
        headers: {
          Authorization: "carina-ferreira-maryam"
        }
      };

    axios
      .get(url, headers)
      .then((res) => {
        console.log(res)
        this.setState({ playlists: res.data.result.tracks});
      })
      .catch((err) => {
        console.log('Ocorreu um erro, tente novamente');
      });
  };




    render() {
        const listaPlaylists = this.state.playlists.map((playlist) =>{
          return (
          <EstiloLista key={playlist.id}>
                       {playlist.name}
                       <button onClick = {() => this.deletePlaylist(playlist.id)}>X</button>
                       <button onClick = {() => this.getPlaylistTracks(playlist.id)}>See more</button>
                       
          </EstiloLista>
          )
        }) 

        return (
          <div>
            <div>
                <button onClick = {this.props.voltarEtapa}>VOLTAR</button>
                <button onClick = {this.props.irParaProximaEtapa3}>Acessar minhas playlists</button>
            </div>

            <h3> Minhas playlists: </h3>
            {listaPlaylists}
            <h1>TESTANDO A PACIENCIA</h1>


          </div>
        );
      };
    }

    export default PaginaLista;