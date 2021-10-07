import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";





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



const TelaInicial = (props) => {
   const [profile, setProfile] = useState([])
  


    // alteraNomeUsuario = (e) => {
    //     this.setState({ nomeUsuario: e.target.value });
    //   };

    // alteraEmailUsuario = (e) => {
    //     this.setState({ emailUsuario: e.target.value });
    //   };

    const getProfile = () => {
        const url =
          "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person";
    

        const headers = {
          headers: {
            Authorization: "carina-ferreira-maryam"
          }
        };
    
        axios
          .get(url, headers)
          .then((res) => {
            setProfile(res.data.profile);
            console.log(res.data)
          })
          .catch((err) => {
            alert("Insira um usuário válido!");
          });
      };

      const choosePerson = () => {
        const url =
          "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person";

        const body =
        {
            "id": (profile.id),
            "choice": true
        }
    

        const headers = {
          headers: {
            Authorization: "carina-ferreira-maryam"
          }
        };
    
        axios
          .post(url,body, headers)
          .then((res) => {
            // setProfile(res.data.profile);
            console.log("UHUUU!!! MATCHEEE")
          })
          .catch((err) => {
            alert("O choosePerson deu errado!!!");
          });
      };


    useEffect(() => {
        getProfile();
    }, []
    
    );

    const clearProfile = () => {
        const url =
          "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear";
    

        const headers = {
          headers: {
            Authorization: "carina-ferreira-maryam"
          }
        };
    
        axios
          .put(url, headers)
          .then((res) => {
            console.log("Resetou os perfis")
          })
          .catch((err) => {
            alert("Deu erro no clear!");
          });
      };


    
return (
    <div>
      <CaixaDiv>
        <button onClick={props.irParaProximaEtapa}>Ver meus matchs</button>
        <h3>AstroMatch</h3>
        <p> Nome do perfil: {profile.name}, {profile.age}</p>
        <img src={profile.photo} alt={profile.photo} />
        <div>{profile.bio}</div>
        <button  >X</button>
        <button onClick = {choosePerson(true)}>OK</button>

      </CaixaDiv>
      <button onClick = {console.log("Cliquei no botão")}> LIMPAAAA </button>
      
      
    </div>
  );
}

export default TelaInicial;