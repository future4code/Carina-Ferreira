import TextField from "@material-ui/core/TextField";
import useForm from '../../hooks/useForm';
import { goToFeed } from '../../routes/coordinator';
import { useHistory } from "react-router-dom";
import React from 'react';
import { BASE_URL } from '../../constants/urls'
import axios from 'axios'
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import styled from 'styled-components'

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
margin-bottom: 8vh;
margin-top: 10vh;
`



const SignUpPage = ({setLoginButton}) => {
  useUnprotectedPage()
    const [form, onChange, clear] = useForm({username:"", email:"", password: ""});
  
    const history = useHistory ()

    const onSubmitForm = (event) => {
      event.preventDefault()
      signUp(form, clear, history, setLoginButton)
    }

    const signUp = (form, clear, history, setLoginButton) => {
      axios.post(`${BASE_URL}/users/signup`, form)
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
        <EstiloTitulo>SIGN UP</EstiloTitulo>
        <EstiloForm onSubmit={onSubmitForm}>
          <TextField
            placeholder = 'Username'
            name={"username"}
            value = {form.username}
            onChange = {onChange}
            type={"username"}
          />
          <br/>
          <TextField
            placeholder = 'Email'
            name={"email"}
            value = {form.email}
            onChange = {onChange}
            type={"email"}
          />
          <br/>
          <TextField
            placeholder = 'Password'
            name={"password"}
            value = {form.password}
            onChange = {onChange}
            type={"password"}
          />
          <p> <i>*The password must be between 8 and 30 characters long </i> </p>
          <br/>
          <br/>
          <button type={"submit"}> Sign Up </button>
        </EstiloForm>
        <br/>
    </EstiloDivPrincipal>
  );
}

export default SignUpPage;
