import React from "react";
import styled from 'styled-components';
import CardPost from '../../components/CardPost/CardPost';
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from '../../hooks/useRequestData';
import {BASE_URL} from '../../constants/urls'

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

  // const [form, onChange, clear] = useForm({email:"", password: ""});
  // const history = useHistory ()


  
  // const onSubmitForm = (event) => {
  //   event.preventDefault()
  //   login(form, clear, history, setLoginButton)
  // }

  const posts = useRequestData([], `${BASE_URL}/posts`)
  console.log(posts)

  const postCards = posts.map((post) => { 
    return (
      <CardPost 
        key={post.id}
        username={post.username}
        title= {post.title}
        onClick={() => null}
      />
    )
  })

  return (
    <div>
        <h2>MEU FEED</h2>
        <ContainerCard>
        <input
        placeholder = 'Escreva seu post aqui!'
        value = ''
        // onChange = {onChangeName}
        />
        <br/>
        <button> POSTAR </button>
        </ContainerCard>
        {/* <CardPost/> */}
        {postCards}
    </div>
  );
}

export default FeedPage;
