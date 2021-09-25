// import React from "react";
// import styled from "styled-components";
// import axios from "axios";

// // const EstiloLista = styled.div`
// //   padding: 20px;
// //   margin: 20px;
// //   border: 1px solid black;
// //   display: flex;
// //   justify-content: space-between;
// //   justify-align: center;
// //   width: 300px;
// // `
// const CaixaDiv = styled.div`
// display: -webkit-box;
// display: -webkit-flex;
// display: -ms-flexbox;
// display: flex;
// -webkit-flex-direction: column;
// -ms-flex-direction: column;
// flex-direction: column;
// border: 1px solid black;
// width: 50%;
// margin: 0 auto;
// padding: 30px;
// `
// export class AcessaPlaylist extends React.Component {
//   state={
//     infosPlaylists: [],
    // filtro: '',
    // nomePlaylist: '',
//   }

//   componentDidMount() {
//     this.getPlaylistTracks();
//   }

//   getPlaylistTracks = (id) => {
//     const url =
//         `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
//         // 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks'

//       const headers = {
//         headers: {
//           Authorization: "carina-ferreira-maryam"
//         }
//       };

//     axios
//       .get(url, headers)
//       .then((res) => {
//         console.log(res)
//         this.setState({ playlists: res.data.result.list});
//       })
//       .catch((err) => {
//         console.log('Ocorreu um erro, tente novamente');
//       });
//   };


    // render() {
        // const listaPlaylists = this.state.playlists.map((playlist) =>{
        //   return (
        //   <EstiloLista key={playlist.id}>
        //                {playlist.name}
        //                <button onClick = {() => this.deletePlaylist(playlist.id)}>X</button>
        //   </EstiloLista>
        //   )
        // }) 

        // return (
        //   <div>
            
        //     <button onClick = {this.props.voltarEtapa}>VOLTAR</button>
            
        //     <label>Selecione a playlist</label>
        //     <select placeholder='selecione'
        //             value=''>
        //         <option value="">Nenhum</option>
        //         <option value="">HappyDays</option>
        //         <option value=""></option>
        //     </select>
                {/* <polygon points= "5.9,88.2 50,11.8 94.1,88.2 "></polygon> */}
            {/* <CaixaDiv>
                <h3>Nova Playlist:</h3>
                <label>Nome:</label>
                    <input  type="text"
                            placeholder = "Insira o nome da música"
                            // value = {this.state.nomePlaylist}
                            // onChange={this.adicionaNovaPlaylist}
                    />
                    <br/>

                     <input  type="text"
                            placeholder = "Insira o nome da playlist"
                            // value = {this.state.nomePlaylist}
                            // onChange={this.adicionaNovaPlaylist}
                    />

                    <br/>

                    <input  type="text"
                            placeholder = "Insira o arquivo da música"
                            // value = {this.state.nomePlaylist}
                            // onChange={this.adicionaNovaPlaylist}
                    />


                <br/>
                <button> Criar</button>
            </CaixaDiv> */}


    //       </div>
    //     );
    //   };
    // }

    // export default AcessaPlaylist;