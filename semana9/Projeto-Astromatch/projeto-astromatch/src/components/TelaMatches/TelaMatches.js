import React, { useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";

const EstiloLista = styled.div`
  padding: 20px;
  margin: 20px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  justify-align: center;
  width: 300px;
`
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
const TelaMatches = (props) => {
    const [profileList, setProfileList] = useState([])


  const getMatches = () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches";

      const headers = {
        headers: {
          Authorization: "carina-ferreira-maryam"
        }
      };

    axios
      .get(url, headers)
      .then((res) => {
        console.log(res)
         setProfileList(res.data);
      })
      .catch((err) => {
        alert('A LISTA DE MATCHES NÃO ROLOU');
      });
      
  };

  useEffect(() => {
    getMatches();
}, [props.choosePerson]

);

 
   
    const listaMatches = profileList.map((profile) =>{
          return (
          <EstiloLista key={profile.id}>
                       {profile.name}
          </EstiloLista>
          )
        }) 

        return (
          <div>
            <CaixaDiv>
                <button onClick = {props.voltarEtapa}>VOLTAR</button>
                <h3> Usuários Cadastrados </h3>
                {listaMatches}
            </CaixaDiv>
    
          </div>
        );
    
    }

    export default TelaMatches;