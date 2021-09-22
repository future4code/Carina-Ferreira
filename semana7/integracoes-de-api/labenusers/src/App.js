import React from "react";
import styled from "styled-components";
import PaginaLista from './components/PaginaLista'
import axios from "axios";
import PaginaInicial from "./components/PaginaInicial";




export class App extends React.Component {
  state = {
    etapa: 1,
  };

  renderizaEtapa = () => {
    switch (this.state.etapa){
      case 1:
        return <PaginaInicial irParaProximaEtapa={this.irParaProximaEtapa}/>;
        case 2:
          return <PaginaLista voltarEtapa={this.voltarEtapa}/>

    }
  }
  
  irParaProximaEtapa = () =>{
    this.setState({etapa: this.state.etapa +1})

  };

  voltarEtapa = () =>{
    this.setState({etapa: this.state.etapa -1})

  };

  render() {

    return (
      <div>

        {this.renderizaEtapa()} 

      </div>
    );
  };
}

export default App;
