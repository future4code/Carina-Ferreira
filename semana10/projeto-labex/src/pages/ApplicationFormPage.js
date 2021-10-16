import { useState } from "react";
import { useHistory } from "react-router-dom";

export const ApplicationFormPage = (props) => {
  const [tripName, setTripName] = useState([])
    const history = useHistory ()
    const goBack = () => {
        history.goBack()
    };


    // const changeTripName = (event) => {
    //   setTripName(event.target.value)
    // };

  return (

    <div>
    
    {/* <select onChange={changeTripName}>
          <option value={""}>Nenhum</option>
          {props.tripList.map(trip => {
            return (
              <option key={props.trip.id} value={props.trip.description}>
                {props.trip.description}
              </option>
            );
          })}
        </select> */}

        <input
          placeholder = 'Nome'
        />

        <input
          placeholder = 'Idade'
        />

        <input
          placeholder = 'Texto de candidatura'
        />

        <input
          placeholder = 'Profissão'
        /> 

        <input
          placeholder = 'País'
        />  
        <p> OI! EU SOU A APPLICATION FORM PAGE!!! </p>
        <button onClick = {goBack}>VOLTAR</button>
        <button>ENVIAR</button>
    </div>
  );
};