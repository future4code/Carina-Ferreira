import React, { useState, useEffect } from "react";
import {CaixaDiv, EstiloBotao, EstiloImagem, EstiloP, EstiloH3, ImgBotao, DivBotoes, EstiloDivBio, ImgBottonFlame, AvisoClear} from "./style";
import IconeCheck from '../img/yes.png'
import IconeX from '../img/no.png'
import IconeFlame from '../img/flame.png'
import axios from "axios";



const TelaInicial = (props) => {
   const [profile, setProfile] = useState({})

   const aluno = "carina-ferreira-maryam"
   
    const getProfile = () => {
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`;
    
        axios
          .get(url)
          .then((res) => {
            setProfile(res.data.profile);
            console.log(res.data)
          })
          .catch((err) => {
            alert("Ocorreu um erro! Tente novamente.");
          });
      };

      const choosePerson = (idProfile, choiceProfile) => {
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`;

        const body =
        {
            id: idProfile,
            choice: choiceProfile
        }
    
        axios
          .post(url,body)
          .then((res) => {
            getProfile(res.data)
            console.log(res.data)

          })
          .catch((err) => {
            alert("Ocorreu um erro! Tente novamente.");
          });
      };

      useEffect(() => {
        getProfile();
    }, []
    
    );
      


    
return (
    <div>
        {!profile ? <AvisoClear> Infelizmente acabaram os perfis, clique no botão para limpar as informações e em seguida atualize a página! </AvisoClear>:
        <CaixaDiv>
          <EstiloBotao onClick={props.irParaProximaEtapa}>
                       <ImgBottonFlame src = {IconeFlame}/>
          </EstiloBotao>

          <EstiloH3>AstroMatch</EstiloH3>
          <EstiloP> {profile.name}, {profile.age}</EstiloP>
          <EstiloImagem src={profile.photo} alt={profile.photo} />
          <br/>
          <EstiloDivBio>{profile.bio}</EstiloDivBio>

          <DivBotoes>
            <EstiloBotao onClick = {() => choosePerson(profile.id, false)}>
                                 <ImgBotao src = {IconeX}/>
            </EstiloBotao>

            <EstiloBotao onClick = {() => choosePerson(profile.id, true)}> 
                                 <ImgBotao src = {IconeCheck}/>
            </EstiloBotao>
          </DivBotoes>

        </CaixaDiv>
    
      }
      
    </div>
  );
}

export default TelaInicial;