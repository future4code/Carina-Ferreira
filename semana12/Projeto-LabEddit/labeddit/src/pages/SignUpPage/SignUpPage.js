import { useState } from "react";
import { useHistory } from "react-router-dom";

const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState ('');
    const [name, setName] = useState ('');
  
    // const history = useHistory ()
  
    const onChangeName = (event) => {
        setName(event.target.value)
        console.log(event.target.value)
      }

    const onChangeEmail = (event) => {
      setEmail(event.target.value)
      console.log(event.target.value)
    }
  
    const onChangePassword = (event) => {
      setPassword(event.target.value)
      console.log(event.target.value)
    }

    
  return (
    <div>
        <h2>SIGN UP</h2>
        <input
        placeholder = 'Name'
        value = {name}
        onChange = {onChangeName}
        />
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
        <button> BOTÃO CADASTRAR</button>
    </div>
  );
}

export default SignUpPage;
