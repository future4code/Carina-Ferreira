import React, { useState, useEffect} from "react";
import {EstiloLista, CaixaDiv, EstiloBotao, ImgBotao, EstiloH3, ImgPerfilMatch, EstiloDivNome} from "./style";
import IconeBack from '../img/back.png'
import axios from "axios";

const TelaMatches = (props) => {
    const [matchList, setMatchList] = useState([])


  const getMatches = () => {
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carina-ferreira-maryam/matches`;

    axios
      .get(url)
      .then((res) => {
         setMatchList(res.data.matches);
      })
      .catch((err) => {
        alert('Houve um erro, tente novamente!');
      });
      
  };

  useEffect(() => {
    getMatches();
}, []

);

 
   
const listaMatches = matchList.map((profile) =>{
  return (
  <EstiloLista key={profile.id}>
               <ImgPerfilMatch src={profile.photo} alt={profile.photo} />
               <EstiloDivNome>{profile.name} </EstiloDivNome>
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