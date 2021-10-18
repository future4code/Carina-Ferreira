import {useEffect, useState} from "react";
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
import { useProtectedPage } from "../hooks/ProtectPages"; 

export const TripDetailsPage = () => {
  const [trip, setTripList] = useState()
  useProtectedPage()

  const params = useParams();

    const history = useHistory ()
    const goBack = () => {
        history.goBack()
    }

    const getTripDetail = () => {

      const token = localStorage.getItem('token')
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/carina-ferreira-maryam/trip/${params.id}`;

      const header = {
        headers:{
        auth: token,
      }
     }
      console.log("oi, eu sou o headerss", header)

      axios
        .get(url, header)
        .then((res) => {
          setTripList(res.data)
          console.log("O  cTRIPDETAIL DEU Certo!!!", res.data)
        })

        .catch((err) => {
          console.log("Ocorreu um erro NO DETAIL!", err.res);
        });
      }

    // const getTripDetail = () => {
    //   axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/carina-ferreira-maryam/trip/${params.id}`, 
    //   {}
    //     // headers: {
    //     //   auth: window.localStorage.getItem('token')
    //     // }
    //   )
    //   .then((response) => {
    //     // setTrip(response.data.trip)
    //     console.log("O gettrip deu certooo")
    //   })
    //   .catch((err) => {
    //     console.log("Ocorreu um erro no tripdetails!", err.response);
    //   });
    // }
  
  
    useEffect(() => {
      getTripDetail()
    }, [])

  return (
    <div>
        <button onClick={goBack}>VOLTAR</button>
        <p> OI! EU SOU A TRIP DETAILS PAGE </p>
        <h3>Detalhe da viagem:</h3>
        {/* {trip.name && <h1>{trip.name}</h1>} */}
        {/* <p> Nome: {trip.name}</p> */}
        <br/>
          {/* <EstiloDivBio>{profile.bio}</EstiloDivBio> */}
    </div>
  );
};