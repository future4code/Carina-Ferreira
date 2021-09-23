import React from "react";
import styled from "styled-components";
import Education from './components/Education'
import PaginaInicial from "./components/PaginaInicial";
import Diy from "./components/Diy";
import Recreational from "./components/Recreational";
import Charity from "./components/Charity";
import Cooking from "./components/Cooking";
import axios from "axios";




export class App extends React.Component {
  state = {
    pagina: 1,
  };

  renderizaPagina = () => {
    switch (this.state.pagina){
      case 1:
        return <PaginaInicial irParaProximaPagina={this.irParaProximaPagina} 
        irParaPaginaDiy={this.irParaPaginaDiy}
        irParaPaginaRecreational={this.irParaPaginaRecreational}
        irParaPaginaCharity={this.irParaPaginaCharity}
        irParaPaginaCooking={this.irParaPaginaCooking}
        />;
        case 2:
          return <Education voltarParaPaginaInicial={this.voltarParaPaginaInicial}/>
          case 3:
            return <Diy voltarParaPaginaInicial2={this.voltarParaPaginaInicial2}/>
            case 4:
              return <Recreational voltarParaPaginaInicial3={this.voltarParaPaginaInicial3}/>
              case 5:
                return <Charity voltarParaPaginaInicial4={this.voltarParaPaginaInicial4}/>
                case 6:
                  return <Cooking voltarParaPaginaInicial5={this.voltarParaPaginaInicial5}/>
      
    
  

    }
  }

  irParaProximaPagina = () =>{
    this.setState({pagina: this.state.pagina +1})
  };

  irParaPaginaDiy = () =>{
    this.setState({pagina: this.state.pagina +2})
  };

  irParaPaginaRecreational = () =>{
    this.setState({pagina: this.state.pagina +3})
  };

  irParaPaginaCharity = () =>{
    this.setState({pagina: this.state.pagina +4})
  };

  irParaPaginaCooking = () =>{
    this.setState({pagina: this.state.pagina +5})
  };



  voltarParaPaginaInicial = () =>{
    this.setState({pagina: this.state.pagina -1})
  };

  
  voltarParaPaginaInicial2 = () =>{
    this.setState({pagina: this.state.pagina -2})
  };

  voltarParaPaginaInicial3 = () =>{
    this.setState({pagina: this.state.pagina -3})
  };

  voltarParaPaginaInicial4 = () =>{
    this.setState({pagina: this.state.pagina -4})
  };

  voltarParaPaginaInicial5 = () =>{
    this.setState({pagina: this.state.pagina -5})
  };

  render() {

    return (
      <div>
        
        {this.renderizaPagina()} 

      </div>
    );
  };
}

export default App;