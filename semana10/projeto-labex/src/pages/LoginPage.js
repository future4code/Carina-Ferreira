import React from "react";
import { useHistory } from "react-router-dom";

export const LoginPage = () => {
    const history = useHistory ()
    const goToAdmHomePage = () => {
        history.push("/adm")
    }
    const goBack = () => {
        history.goBack()
    }
  return (
    <div>
        <button onClick={goBack}>BACK HOME</button>
        <button onClick={goToAdmHomePage}>BOTÃO ENTRAR</button>
        <p> OI! EU SOU A LOGIN PAGE </p>
    </div>
  );
};