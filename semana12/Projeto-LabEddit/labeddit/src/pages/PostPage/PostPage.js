import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useParams } from 'react-router-dom';
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
// import CardPost from '../../components/CardPost'
import styled from 'styled-components'

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

const PostPage = (props) => {
  useProtectedPage()
  const params = useParams()
  console.log(params)

  const detailsPost = useRequestData([], `${BASE_URL}/posts`)
  console.log(detailsPost)

  const getDetail = detailsPost.map((item) => {
    if(item.id === params.id) {
      return (
        <ContainerCard
          key ={item.id}
          username={item.username}

        />
      );
    }
  });
  return (
    <div>
        Oi! Eu sou os detalhes do post!
        {getDetail}
    </div>
  );
}

export default PostPage;
