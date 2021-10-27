import TextField from "@material-ui/core/TextField";
import useForm from '../../hooks/useForm';
import { goToSignUpPage, goToFeed } from '../../routes/coordinator';
import { useHistory } from "react-router-dom";
import React from 'react';
import axios from "axios";
import { BASE_URL } from '../../constants/urls'
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

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
    <div>
      <h2>LOGIN</h2>
      <div>
        <form onSubmit={onSubmitForm}>
          <TextField
              placeholder = 'Email'
              name={"email"}
              value = {form.email}
              onChange = {onChange}
              required
              type={"email"}
              // fullWidth
          />
          <TextField
              placeholder = "Senha"
              name={"password"}
              value = {form.password}
              onChange = {onChange}
              required
              type={"password"}
              // fullWidth
          />
          
          <button type={"submit"}> BOTÃO ENTRAR</button>
        </form>
      </div>
      <br/>
      <button onClick={() => goToSignUpPage(history)}> BOTÃO CADASTRO </button>
      <p> OI! EU SOU A LOGIN PAGE </p>
    </div>
  );
}; 