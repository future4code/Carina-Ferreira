import TextField from "@material-ui/core/TextField";
import useForm from '../../hooks/useForm'
import { goToFeed, goToSignUpPage } from '../../routes/coordinator'
import { useHistory } from "react-router-dom";
// import Header from '../../components/Header/Header'
// import axios from "axios";

export const LoginPage = () => {
  const [form, onChange, clear] = useForm({email:'', password: ''});
//   const [password, setPassword] = useState ('');

  const history = useHistory ()
  
  const onSubmitForm = (event) => {
    event.preventDefault()
  }

//   const onChangeEmail = (event) => {
//     setEmail(event.target.value)
//     console.log(event.target.value)
//   }

//   const onChangePassword = (event) => {
//     setPassword(event.target.value)
//     console.log(event.target.value)
//   }


  return (
    <div>
      <h2>LOGIN</h2>
      
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
            placeholder = 'Senha'
            name={"password"}
            value = {form.password}
            onChange = {onChange}
            required
            type={"password"}
            // fullWidth
        />
      </form>
      <br/>
      <button onClick={() => goToSignUpPage(history)}> BOTÃO CADASTRO </button>
      <button type={'submit'}> BOTÃO ENTRAR</button>
      <p> OI! EU SOU A LOGIN PAGE </p>
    </div>
  );
}; 