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
align-items: center;
justify-content: center;
border: 2px solid black;
width: 450px;
height: 130px;
margin: 16px;
background-color: white;
margin-left: 35vw;
margin-top: 20px;
text-transform: capitalize;
`
const EstiloDivPrincipal=styled.div`
background-image: url("https://th.bing.com/th/id/R.f44bd6f284877acf607364d7b6c95675?rik=yYWlsThDpAwILw&pid=ImgRaw&r=0");
background-attachment: fixed;
` 

const EstiloTitulo=styled.h2`
margin:0;
text-align: center;
color: white;
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
        voteCount={post.voteSum}
        commentCount={post.commentCount}
      />

    )
  })

  return (
    <EstiloDivPrincipal>
        <EstiloTitulo>MY FEED</EstiloTitulo>
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
            <button> POST </button>
          </form>
        </ContainerCard>
        {/* <CardPost/> */}
        {postCards}
    </EstiloDivPrincipal>
  );
}

export default FeedPage;
