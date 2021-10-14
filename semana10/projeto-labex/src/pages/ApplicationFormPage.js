import React from "react";
import { useHistory } from "react-router-dom";

export const ApplicationFormPage = () => {
    const history = useHistory ()
    const goBack = () => {
        history.goBack()
    }

  return (
    <div>
        <button onClick = {goBack}>VOLTAR</button>
        <p> OI! EU SOU A APPLICATION FORM PAGE!!! </p>
    </div>
  );
};