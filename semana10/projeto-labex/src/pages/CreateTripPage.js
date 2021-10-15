import React from "react";
import { useHistory } from "react-router-dom";

export const CreateTripPage = () => {
    const history = useHistory ()
    const goBack = () => {
        history.goBack()
    }
  return (
    <div>
        <button onClick={goBack}>VOLTAR</button>
        <h2>Adicionar viagem</h2>
        <input
          placeholder = 'Nome da viagem'
        />

        <select>
          <option>Vênus</option>
          <option>Terra</option>
          <option>Marte</option>
          <option>Júpiter</option>
          <option>Saturno</option>
          <option>Urano</option>
          <option>Netuno</option>
          <option>Mercúrio</option>
        </select>

        <input
          placeholder = 'Data'
        />

        <input
          placeholder = 'Descrição'
        />

        <input
          placeholder = 'Duração'
        />
        <button>Criar</button>
        <p> OI! EU SOU A CREATE TRIPS PAGE PAGE </p>
    </div>
  );
};