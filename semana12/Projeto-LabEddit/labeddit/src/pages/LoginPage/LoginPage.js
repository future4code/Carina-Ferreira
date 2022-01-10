import TextField from "@material-ui/core/TextField";
import useForm from '../../hooks/useForm';
import { goToSignUpPage, goToFeed } from '../../routes/coordinator';
import { useHistory } from "react-router-dom";
import React from 'react';
import axios from "axios";
import { BASE_URL } from '../../constants/urls'
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import styled from "styled-components";

const EstiloDivPrincipal=styled.div`
height: 100vH;
` 
const EstiloForm = styled.form`
display:flex;
flex-direction: column;
align-items: center;
`
const EstiloTitulo=styled.h2`
margin:0;
text-align: center;
margin-bottom: 7vh;
margin-top: 10vh;
`
const EstiloButton=styled.div`
display:flex;
justify-content:center;
`


export const LoginPage = ({setLoginButton}) => {
  useUnprotectedPage()
  const [form, onChange, clear] = useForm({email:"", password: ""});
  const history = useHistory ()


  
  const onSubmitForm = (event) => {
    event.preventDefault()
    login(form, clear, history, setLoginButton)
  }

  const login = (form, clear, history, setLoginButton) => {
    axios.post(`${BASE_URL}/users/login`, form)
    .then((res) => {
      localStorage.setItem("token", res.data.token)
      clear()
      goToFeed(history)
      setLoginButton("Logout")
    })
    .catch((err) => alert(err.response.data.message))
  }


  return (
    <EstiloDivPrincipal>
      <EstiloTitulo>LOGIN</EstiloTitulo>
      <div>
        <EstiloForm onSubmit={onSubmitForm}>
          <TextField
              placeholder = 'Email'
              name={"email"}
              value = {form.email}
              onChange = {onChange}
              required
              type={"email"}
          />
          <br/>
          <TextField
              placeholder = "Password"
              name={"password"}
              value = {form.password}
              onChange = {onChange}
              required
              type={"password"}
          />
          <br/>
          <br/>
          <button type={"submit"}> Sign In </button>
        </EstiloForm>
      </div>
      <br/>
      <EstiloButton>
        <button onClick={() => goToSignUpPage(history)}> Don't have an account? Sign Up! </button>
      </EstiloButton>
    </EstiloDivPrincipal>
  );
}; 