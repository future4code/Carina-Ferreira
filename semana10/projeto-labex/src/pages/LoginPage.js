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
      <h2>LOGIN</h2>
      <input
      placeholder = 'Email'
      />
      <input
      placeholder = 'Senha'
      />
      <br/>
      <button onClick={goBack}>BACK HOME</button>
      <button onClick={goToAdmHomePage}>BOTÃO ENTRAR</button>
      <p> OI! EU SOU A LOGIN PAGE </p>
    </div>
  );
};