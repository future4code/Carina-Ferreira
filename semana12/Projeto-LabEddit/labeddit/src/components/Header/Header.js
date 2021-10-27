import { useState } from "react";
import styled from 'styled-components';
import { goToLogin, goToFeed } from "../../routes/coordinator";
import { useHistory } from "react-router";

const EstiloHeader = styled.div`

background-color: orange;
height: 50px;
text-align: center;
display: flex;
justify-content: space-around;
align-items: center;
` 

const Header = ({loginButton,setLoginButton}) => {
    const history = useHistory ()
    const token = localStorage.getItem("token")
    // const [loginButton, setLoginButton] = useState(token? "Logout" : "Login")

    const logout = () => {
      localStorage.removeItem("token")
    }
  
    const loginButtonAction = () =>{
      if (token){
        logout()
        setLoginButton("Login")
        goToLogin(history)
      }else{
        goToLogin(history)
      }
    }
  return (
    <EstiloHeader>
        <button onClick ={() => goToFeed(history)}>Feed</button>
        <h1> LabEddit </h1>
        <button onClick ={loginButtonAction}>{loginButton}</button>
    </EstiloHeader>
  );
}

export default Header;
