import React from "react";
import { useHistory } from "react-router-dom";

export const TripDetailsPage = () => {
    const history = useHistory ()
    const goBack = () => {
        history.goBack()
    }
  return (
    <div>
        <button onClick={goBack}>VOLTAR</button>
        <p> OI! EU SOU A TRIP DETAILS PAGE </p>
    </div>
  );
};