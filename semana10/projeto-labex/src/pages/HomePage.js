import React from "react";
import { useHistory } from "react-router-dom"

export const HomePage = () => {
    const history = useHistory ()
    const goToLoginPage = () => {
        history.push("/login")
    }

    const goToListTripsPage = () => {
        history.push("/trips/list")
    }


  return (
    <div>
        <button onClick = {goToLoginPage}>ÁREA ADM</button>
        <button onClick = {goToListTripsPage}>VER VIAGENS</button>
        <p> OI! EU SOU A HOME PAGE </p>
    </div>
  );
};