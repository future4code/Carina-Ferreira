import React from "react";
import styled from 'styled-components';
import { goToLogin } from "../../routes/coordinator";
import { useHistory } from "react-router";

const EstiloHeader = styled.div`

background-color: orange;
height: 50px;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
` 

const Header = () => {
    const history = useHistory ()

  return (
    <EstiloHeader>
        <h1> LabEddit </h1>
        <button onClick ={() => goToLogin(history)}>HOME</button>
    </EstiloHeader>
  );
}

export default Header;
