import React from "react";
import styled from 'styled-components'
import { useHistory } from "react-router";
import { goToPost } from "../../routes/coordinator";
// import { useParams } from 'react-router-dom'
// import { BASE_URL } from '../../constants/urls'
// import useRequestData from '../../hooks/useRequestData';

const ContainerCard=styled.div`
display: flex;
flex-direction: column;
align-items: center;
border: 2px solid black;
width: 450px;
height: 250px;
margin: 16px;
background-color: white;
border-radius: 15px;
margin-left: 40px;
text-transform: capitalize
`

const CardPost = (props) => {
  const history = useHistory ()
  // const params = useParams();

  // const post = useRequestData({},`${BASE_URL}/posts/${params.id}`)
  // console.log(post)

  const onClickPost = () => {
    goToPost(history)
    console.log(onClickPost)
  }

  return (
    <div>
        {/* <h2>Meu feed:</h2> */}
        <ContainerCard>
          <br/>
          {/* <button>+</button> */}
          <button onClick={onClickPost}> + </button>
          <h3>{props.username}</h3>
          <p>{props.title}</p>
          <p>{props.body}</p>
          
        </ContainerCard>
    </div>
  );
}

export default CardPost;
