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
        <p> OI! EU SOU A CREATE TRIPS PAGE PAGE </p>
    </div>
  );
};