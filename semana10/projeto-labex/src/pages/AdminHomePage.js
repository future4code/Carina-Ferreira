import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';

const EstiloCard = styled.div`
background-color: pink;
display: block;
justify-content: center;
margin-bottom: 10px;
border: 5px solid black;
width: 100%;
height: 80%;
font-size: large;
padding: 10px;
`

export const AdminHomePage = () => {
    const [tripsList, setTripsList] = useState([])

    const params = useParams();

    const history = useHistory ()
    const goToCreateTripPage = () => {
        history.push("/admin/trips/create")
    }
    const goToTripDetailsPage = (id) => {
        history.push(`/admin/trips/${id}`)
    }

    const goToHomePage = () => {
        history.push("/")
    }



    const goBack = () => {
        history.goBack()
    }
         
    const getTripsList = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/carina-ferreira-maryam/trips`;
      
         axios
          .get(url)
          .then((res) => {
            console.log("O GETLIST DEU CERTOO", res.data);
            setTripsList(res.data.trips);
            // console.log(res.data)
          })
          .catch((err) => {
            console.log("Ocorreu um erro! Tente novamente.");
          });
          };
      

    const deleteTrip = () => {
        const token = localStorage.getItem('token')
          const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/carina-ferreira-maryam/trips/${params.id}`;
      
            const header = {
              headers:{
              auth: token,
            }
           }
            // console.log("oi, eu sou o headerss", header)
      
            axios
              .delete(url, header)
              .then((res) => {
                // setTripsList(res.data)
                console.log("O  DELETE DEU Certo!!!", res.data)
                getTripsList(res.data);
              })
      
              .catch((err) => {
                console.log("Ocorreu um erro NO DELETE!", err.res);
              });
            }
    
        useEffect(() => {
            getTripsList();
        }, []
        );

    
    const newTripsList = tripsList.map((trips) =>{
        return (
            <EstiloCard key={trips.id}>
                <p>Nome: {trips.name}</p>
                <button onClick={()=>goToTripDetailsPage(trips.id)}>Detalhes</button>
                <button onClick={()=>deleteTrip(trips.id)}>Delete trip</button>
            </EstiloCard>
                )
              }) 
  return (
    <div>
        <button onClick={goToHomePage}>BACK HOME</button>
        <button onClick={goToCreateTripPage}>ADICIONAR VIAGEM</button>
        <button onClick={goBack}>LOGOUT</button>
        <div> {newTripsList} </div>
        <p> OI! EU SOU A ADMIN HOME PAGE </p>
    </div>
  );
};