import React from "react";
import styled from "styled-components";
import PaginaLista from './components/PaginaLista'
import axios from "axios";
import PaginaInicial from "./components/PaginaInicial";





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




// const headers = {
//   headers: {
//     Authorization: "leticia-chijo-maryam"
//   }
// };




export class App extends React.Component {
  state = {
    etapa: 1,
  };

  renderizaEtapa = () => {
    switch (this.state.etapa){
      case 1:
        return <PaginaInicial />;
        case 2:
          return <PaginaLista />

    }
  }
  
  irParaProximaEtapa = () =>{
    this.setState({etapa: this.state.etapa +1})

  };


  render() {

    return (
      <div>

        {this.renderizaEtapa()}
        {this.state.etapa !== 2 &&(
        <button onClick = {this.irParaProximaEtapa}>Próxima etapa</button>)}

      </div>
    );
  };
}

export default App;
