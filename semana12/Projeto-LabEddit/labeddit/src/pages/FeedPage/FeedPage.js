import React from "react";
import styled from 'styled-components';
import CardPost from '../../components/CardPost/CardPost';
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from '../../hooks/useRequestData';
import {BASE_URL} from '../../constants/urls';
import useForm from '../../hooks/useForm';
import axios from 'axios';
import { goToPost } from "../../routes/coordinator";
import { useHistory } from "react-router";

const ContainerCard=styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 2px solid black;
width: 250px;
height: 130px;
margin: 16px;
background-color: white;
border-radius: 15px;
margin-left: 40px;
margin-top: 20px;
text-transform: capitalize
`

const FeedPage = () => {
  useProtectedPage()
  const history = useHistory ()

  const [form, onChange, clear] = useForm({title:"", body: ""});

  
  const onSubmitForm = (event) => {
    event.preventDefault()
    console.log(form)
    createPost()
  }

  
  const onClickDetailPost = (id) => {
    goToPost(history, id)
  }

  const posts = useRequestData([], `${BASE_URL}/posts`)[0]
  console.log(posts)

  const createPost = () => {
    axios.post(`${BASE_URL}/posts`, form, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
    .then((res) => {
      alert(res.data.message)
      clear()
    })
    .catch((err) => alert(err.response.message))
  }

  const postCards = posts.map((post) => { 
    return (
      <CardPost
        key={post.id}
        username={post.username}
        title= {post.title}
        body={post.body}
        onClick={() =>onClickDetailPost(post.id)}
      />

    )
  })

  return (
    <div>
        <h2>MEU FEED</h2>
        <ContainerCard>
          <form onSubmit={onSubmitForm}>
            <input
              placeholder = 'Título'
              value = {form.title}
              name = {"title"}
              onChange={onChange}
              type={"title"}
            // onChange = {onChangeName}
            />
             <input
              placeholder = 'Escreva seu post aqui!'
              value = {form.body}
              name = {"body"}
              onChange={onChange}
              type={"text"}
            // onChange = {onChangeName}
            />
            <br/>
            <button> POSTAR </button>
          </form>
        </ContainerCard>
        {/* <CardPost/> */}
        {postCards}
    </div>
  );
}

export default FeedPage;
