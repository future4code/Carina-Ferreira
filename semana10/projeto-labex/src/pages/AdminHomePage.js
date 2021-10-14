import React from "react";
import { useHistory } from "react-router-dom";

export const AdminHomePage = () => {
    const history = useHistory ()
    const goToCreateTripPage = () => {
        history.push("/admin/trips/create")
    }
    const goToHomePage = () => {
        history.push("/")
    }
    const goBack = () => {
        history.goBack()
    }
  return (
    <div>
        <button onClick={goToHomePage}>BACK HOME</button>
        <button onClick={goToCreateTripPage}>ADICIONAR VIAGEM</button>
        <button onClick={goBack}>LOGOUT</button>
        <p> OI! EU SOU A ADMIN HOME PAGE </p>
    </div>
  );
};