import React from 'react';
import styled from 'styled-components';
import Post from './components/Post/Post';
import {IconeComContador} from './components/IconeComContador/IconeComContador';
import { SecaoComentario } from './components/SecaoComentario/SecaoComentario';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

state = {

  posts: [
    {
      nomeUsuario: 'paulinha',
      fotoUsuario: 'https://picsum.photos/50/50?random=0',
      fotoPost: 'https://picsum.photos/200/150?random=0'
    },

    {
      nomeUsuario: 'catarina',
      fotoUsuario: 'https://picsum.photos/50/50?random=1',
      fotoPost: 'https://picsum.photos/200/150?random=1'
    },
    {
      nomeUsuario: 'marcela',
      fotoUsuario: 'https://picsum.photos/50/50?random=2',
      fotoPost: 'https://picsum.photos/200/150?random=2',
    }
  ],
  valorInputUsuario: '',
  valorInputFotoUsuario: '',
  valorInputFotoPost: '',
}

adicionaPost = () => {
  const novoPost = {
    nomeUsuario: this.state.valorInputUsuario,
    fotoUsuario: this.state.valorInputFotoUsuario,
    fotoPost: this.state.valorInputFotoPost,
  }
  const OutrosPosts = [...this.state.posts, novoPost];
  this.setState({posts: OutrosPosts, valorInputUsuario: '', valorInputFotoUsuario: '', valorInputFotoPost: ''});
};

onChangeInputUsuario = (event) => {
  this.setState({ valorInputUsuario: event.target.value});
};

onChangeInputFotoUsuario = (event) => {
  this.setState({ valorInputFotoUsuario: event.target.value});
};

onChangeInputFotoPost = (event) => {
  this.setState({valorInputFotoPost: event.target.value});
};
  render() {
   
      const listaDePosts = this.state.posts.map((post) => {
        return (
          <Post
            nomeUsuario = {post.nomeUsuario} fotoUsuario = {post.fotoUsuario} fotoPost = {post.fotoPost}
          />
        );
      });

      return (
      <MainContainer>
        <input
        value={this.state.valorInputUsuario}
        onChange={this.onChangeInputPessoa}
        placeholder={"Usuário"}
        />

        <input
        value={this.state.valorInputFotoUsuario}
        onChange={this.onChangeInputFotoUsuario}
        placeholder={"Foto"}
        />

        <input
        value={this.state.valorInputFotoPost}
        onChange={this.onChangeInputFotoPost}
        placeholder={"Imagem"}
        />
        <button onClick={this.props.adicionaPost}>Adicionar</button>
          {listaDePosts}
      </MainContainer>
    );
  }
}

export default App;
