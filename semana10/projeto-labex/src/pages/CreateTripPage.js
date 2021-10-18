import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import {useProtectedPage} from '../hooks/ProtectPages'

export const CreateTripPage = () => {
  useProtectedPage()

   const [name, setName] = useState("");
   const [planet, setPlanet] = useState("");
   const [description, setDescription] = useState("");
   const [date, setDate] = useState("");
   const [duration, setDuration] = useState ("");

  //  useProtectedPage()

   const history = useHistory ()
   const goBack = () => {
       history.goBack()
   }



   const onChangeName = (event) => {
     setName(event.target.value)
   }

   const onChangePlanet = (event) => {
    setPlanet(event.target.value)
  }

  const onChangeDescription = (event) => {
    setDescription(event.target.value)
  }

  const onChangeDate = (event) => {
    setDate(event.target.value)
  }

  const onChangeDuration = (event) => {
    setDuration(event.target.value)
  }


  const onClickButtonCreate = () => {

    const token = localStorage.getItem('token')
    console.log(token)

  console.log(name, planet, date, description, duration)

      const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/carina-ferreira-maryam/trips";

      const body =
      {
        name: name,
        planet: planet,
        date: date,
        description: description,
        durationInDays: duration,
      };

  

      const header = {
        headers:{
        auth: token,
      }
     }
      console.log("oi, eu sou o headerss", header)

      axios
        .post(url,body, header)
        .then((res) => {
          // onClickButtonCreate(res.data)
          console.log("Deu certo!!!", res.data)
        })

        .catch((err) => {
          console.log("Ocorreu um erro!", err.res);
        });
      }


  return (
    <div>
        <button onClick={goBack}>VOLTAR</button>
        <h2>Adicionar viagem</h2>
        <input
          placeholder = 'Nome da viagem'
          value = {name}
          type = "text"
          onChange = {onChangeName}
        />

        <br/>
        <br/>  

        <select  
          value = {planet}
          onChange = {onChangePlanet}>
          <option>Vênus</option>
          <option>Terra</option>
          <option>Marte</option>
          <option>Júpiter</option>
          <option>Saturno</option>
          <option>Urano</option>
          <option>Netuno</option>
          <option>Mercúrio</option>
        </select>

        <br/> 
        <br/> 

        <input
          placeholder = 'Data'
          type="date" name="date" required="" min="2021-10-17" value= {date} format = "dd//yyyy"
          onChange = {onChangeDate}
        />

        <br/>
        <br/> 

        <input
          placeholder = 'Descrição'
          value = {description}
          onChange = {onChangeDescription}
        />

        <br/>
        <br/> 

        <input
          placeholder = 'Duração'
          value = {duration}
          onChange = {onChangeDuration}
        />

        <br/>
        <br/>

        <button onClick = {onClickButtonCreate}>Criar</button>

        <br/>
        <br/>

        <p> OI! EU SOU A CREATE TRIPS PAGE PAGE </p>
    </div>
  );
};