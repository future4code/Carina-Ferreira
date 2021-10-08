import React, { useState, useEffect} from "react";
import {EstiloLista, CaixaDiv, EstiloBotao, ImgBotao, EstiloH3} from "./style";
import IconeBack from '../img/back.png'
import axios from "axios";

const TelaMatches = (props) => {
    const [matchList, setMatchList] = useState([])


  const getMatches = () => {
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:${props.aluno}/matches`;

    axios
      .get(url)
      .then((res) => {
        console.log(res)
         setMatchList(res.data.matches);
      })
      .catch((err) => {
        alert('A LISTA DE MATCHES NÃO ROLOU');
      });
      
  };

  useEffect(() => {
    getMatches();
}, []

);

// const clearProfile = (props) => {
//   const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:${props.aluno}/clear`;


//   axios
//     .put(url)
//     .then((res) => {
//       console.log("Resetou os perfis")
//     })
//     .catch((err) => {
//       alert("Deu erro no clear!");
//     });
// };

 
   
const listaMatches = matchList.map((profile) =>{
  return (
  <EstiloLista key={profile.id}>
               <img src={profile.photo} alt={profile.photo} />
               {profile.name}
  </EstiloLista>
  )
}) 

        return (
          <div>
            <CaixaDiv>
                <EstiloBotao onClick = {props.voltarEtapa}>
                        <ImgBotao src = {IconeBack}/>
                </EstiloBotao>
                <EstiloH3> Meus matches: </EstiloH3>
                {listaMatches}
            </CaixaDiv>
                
          </div>
        );
    
    }

    export default TelaMatches;