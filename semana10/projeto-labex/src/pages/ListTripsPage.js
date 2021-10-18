import { useState, useEffect} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"
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

export const ListTripsPage = () => {
  const [tripsList, setTripsList] = useState([])

    const history = useHistory ()
    const goToApplicationFormPage = () => {
        history.push("/trips/application")
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
          alert("Ocorreu um erro! Tente novamente.");
        });
    };

    useEffect(() => {
      getTripsList();
  }, []
    );
  
  const newTripsList = tripsList.map((trips) =>{
    return (
    <EstiloCard key={trips.id}>
                <p>Nome: {trips.name}</p>
                <br/>
                <p> Descrição:{trips.description} </p>
                <br/>
                <p>Planeta: {trips.planet} </p>
                <br/>
                <p>Duração:{trips.durationInDays} </p>
                <br/>
                <p>Data:{trips.date} </p>

    </EstiloCard>
    )
  }) 

  return (
    <div>
        <button onClick = {goBack}>BACK HOME</button>
        <button onClick = {goToApplicationFormPage}>ME INSCREVER</button>
        <p> OI! EU SOU A LIST TRIPS PAGE!!!! </p>
        <div> {newTripsList} </div>
    </div>
  );
};