import React from "react";
import { useHistory } from "react-router-dom";

export const ApplicationFormPage = () => {
    const history = useHistory ()
    const goBack = () => {
        history.goBack()
    }

  return (
    <div>
    
        <select>
          <option>Escolha uma viagem</option>
        </select>

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