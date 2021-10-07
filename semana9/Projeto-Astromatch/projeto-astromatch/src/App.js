import React, {useState} from "react";
// import styled from "styled-components";
import TelaInicial from './components/TelaInicial/TelaInicial'
// import axios from "axios";
import TelaMatches from "./components/TelaMatches/TelaMatches";




const App = (props) => {
  const [etapa, setEtapa] = useState (1)

  const renderizaEtapa = () => {
    switch (etapa){
      case 1:
        return <TelaInicial irParaProximaEtapa={irParaProximaEtapa}/>;
        case 2:
          return <TelaMatches voltarEtapa={voltarEtapa}/>

    }
  }
  
  const irParaProximaEtapa = () => {
    setEtapa(etapa +1)

  };

  const voltarEtapa = () => { 
    setEtapa(etapa -1)

  };


    return (
      <div>

        {renderizaEtapa()} 
        

      </div>
    );
}

export default App;