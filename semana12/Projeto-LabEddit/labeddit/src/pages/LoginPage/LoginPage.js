import { useState } from "react";
import { useHistory } from "react-router-dom";
// import axios from "axios";

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState ('');

  const history = useHistory ()

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
    console.log(event.target.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
    console.log(event.target.value)
  }

//   const onClickButtonLogin = () => {
//     console.log(email, password)

//       const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/carina-ferreira-maryam/login`;

//       const body =
//       {
//           email: email,
//           password: password
//       }

//       axios
//         .post(url,body)
//         .then((res) => {
//           console.log("Deu certo!!!", res.data.token)
//           localStorage.setItem('token', res.data.token)
//           history.push('/adm')

//         })
//         .catch((err) => {
//           console.log("Ocorreu um erro!", err.response);
//         });
//   }

 
  const goBack = () => {
      history.goBack()
    }
  return (
    <div>
      <h2>LOGIN</h2>
      <input
      placeholder = 'Email'
      value = {email}
      onChange = {onChangeEmail}
      />
      <input
      placeholder = 'Senha'
      value = {password}
      onChange = {onChangePassword}
      />
      <br/>
      <button onClick={goBack}>BOTÃO CADASTRAR</button>
      <button>BOTÃO ENTRAR</button>
      <p> OI! EU SOU A LOGIN PAGE </p>
    </div>
  );
}; 