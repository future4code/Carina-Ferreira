import React from "react";
import { useHistory } from "react-router-dom"

export const ListTripsPage = () => {
    const history = useHistory ()
    const goToApplicationFormPage = () => {
        history.push("trips/application")
    }
    const goBack = () => {
        history.goBack()
    }
  return (
    <div>
        <button onClick = {goBack}>BACK HOME</button>
        <button onClick = {goToApplicationFormPage}>ME INSCREVER</button>
        <p> OI! EU SOU A LIST TRIPS PAGE!!!! </p>
    </div>
  );
};