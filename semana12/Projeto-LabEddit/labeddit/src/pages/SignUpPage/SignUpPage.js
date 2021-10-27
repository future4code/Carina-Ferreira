import TextField from "@material-ui/core/TextField";
import useForm from '../../hooks/useForm';
import { goToFeed } from '../../routes/coordinator';
import { useHistory } from "react-router-dom";
import React from 'react';
import { BASE_URL } from '../../constants/urls'
import axios from 'axios'
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

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
    <div>
        <h2>SIGN UP</h2>
        <form onSubmit={onSubmitForm}>
          <TextField
            placeholder = 'Username'
            name={"username"}
            value = {form.username}
            onChange = {onChange}
            type={"username"}
          />
          <TextField
            placeholder = 'Email'
            name={"email"}
            value = {form.email}
            onChange = {onChange}
            type={"email"}
          />
          <TextField
            placeholder = 'Password'
            name={"password"}
            value = {form.password}
            onChange = {onChange}
            type={"password"}
          />
          <button type={"submit"}> BOTÃO CADASTRAR</button>
        </form>
        <br/>
        {/* <button> BOTÃO CADASTRAR</button> */}
    </div>
  );
}

export default SignUpPage;
