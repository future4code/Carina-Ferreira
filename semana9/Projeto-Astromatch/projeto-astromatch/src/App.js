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
          default:
            return alert("Algo deu errado... tente novamente")

    }
  }

//   const clearProfile = (props) => {
//     const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:${props.aluno}/clear`;
  
//     axios
//       .put(url)
//       .then((res) => {
//         console.log("Resetou os perfis")
//       })
//       .catch((err) => {
//         alert("Deu erro no clear!");
//       });
//   };

//   useEffect(() => {
//     clearProfile();
// }, []

// );
  

  const irParaProximaEtapa = () => {
    setEtapa(etapa +1)

  };

  const voltarEtapa = () => { 
    setEtapa(etapa -1)

  };


    return (
      <div>

        {renderizaEtapa()} 
        {/* <button onClick = {clearProfile}> LIMPAAAA </button> */}

        
      </div>
    );
}

export default App;