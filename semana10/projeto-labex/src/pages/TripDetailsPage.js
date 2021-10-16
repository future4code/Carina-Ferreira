import {useEffect} from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

export const TripDetailsPage = () => {
    const history = useHistory ()
    const goBack = () => {
        history.goBack()
    }

    useEffect(() => {
      const token = localStorage.getItem('token')
      axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/carina-ferreira-maryam/trip/Tx7tgAA34T3ukvrSf73F', {
        headers: {
          auth: token
        }
      })
      .then((res) => {
        // getProfile(res.data)
        console.log("o trip details deu certo!!!", res.data)

      })
      .catch((err) => {
        console.log("Ocorreu um erro no tripdetails!", err.response);
      });
    })
  return (
    <div>
        <button onClick={goBack}>VOLTAR</button>
        <p> OI! EU SOU A TRIP DETAILS PAGE </p>
        <h3>Detalhe da viagem:</h3>
          <p> Nome: </p>
          {/* <EstiloImagem src={profile.photo} alt={profile.photo} /> */}
          <br/>
          {/* <EstiloDivBio>{profile.bio}</EstiloDivBio> */}
    </div>
  );
};