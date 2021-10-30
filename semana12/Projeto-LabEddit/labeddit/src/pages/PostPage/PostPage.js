import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useParams } from 'react-router-dom';
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import CardPost from '../../components/CardPost/CardPost'
import useForm from '../../hooks/useForm';
// import TextField from "@material-ui/core/TextField";
import axios from 'axios'
import { InputBase } from "@material-ui/core";
import styled from 'styled-components'

const ContainerCard=styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 2px solid black;
width: 450px;
height: 130px;
margin: 35px;
background-color: white;
// border-radius: 15px;
margin-left: 35vw;
margin-top: 20px;
text-transform: capitalize
`

const PostPage = (props) => {
  const [form, onChange, clear] = useForm({body:""});

  useProtectedPage()

  const onSubmitForm = (event) => {
    event.preventDefault()
    createComment(form, clear)
  }

  const params = useParams()
  console.log(params)

  const detailsPost = useRequestData([], `${BASE_URL}/posts`)[0]
  console.log(detailsPost)

  const comments = useRequestData([],`${BASE_URL}/posts/${params.id}/comments`)[0]
  console.log("Oi, eu sou o comments",comments)

  const createComment = (form, clear) => {
    axios.post(`${BASE_URL}/posts/${params.id}/comments`, form, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
    .then((res) => {
      clear()
      console.log("oi,deu certoo",res)
      // comments()
    })
    .catch((err) => console.log(err))
  }

  const getDetail = detailsPost.map((item) => {
    if(item.id === params.id) {
      return (
        <CardPost
          key ={item.id}
          username={item.username}
          body={item.body}
          voteCount={item.voteSum}
          commentCount={item.commentCount}
        />
      );
    }
  });

  const getComments = comments.map((comment) => {
      return (
        <CardPost
          key ={comment.id}
          username={comment.username}
          body={comment.body}
          voteCount={comment.voteSum}
          commentCount={comment.commentCount}
        />
      );
  });
  


  
  return (
    <div>
        {/* <h1>POST:</h1> */}
        {getDetail}
        <ContainerCard onSubmit={onSubmitForm}>
          <input
              placeholder = 'Write your comment'
              name={"body"}
              value = {form.body}
              onChange = {onChange}
              type={"body"}
          />
          {/* <h2>COMMENTS:</h2> */}
          <br/>
          <button type={"submit"}> Add comment</button>
        </ContainerCard>
        {getComments}
    </div>
  );
}

export default PostPage;
