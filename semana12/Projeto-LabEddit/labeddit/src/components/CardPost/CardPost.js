import React from "react";
import styled from 'styled-components'
// import { useHistory } from "react-router";
// import { goToPost } from "../../routes/coordinator";
// import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/urls'
import axios from 'axios'
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
text-transform: capitalize;
// cursor: pointer;
`
const EstiloFooterCard=styled.div`
display: flex;
width: 300px;
justify-content: space-between;
`

const CardPost = (props) => {
  // const params = useParams()

  // const createPostVote = () => {
  //   axios.post(`${BASE_URL}/posts/${params.id}/votes`, {
  //     body: {
  //       direction: 1
  //     }
  //   })
  //   .then((res) => {
  //     console.log(res.data.message)
  //   })
  //   .catch((err) => console.log(err.response.message))
  // }

  return (
    <div>
        <ContainerCard>
          <br/>
          <button onClick={props.onClick}> ⏩ </button>
          <h3>{props.username}</h3>
          <p>{props.title}</p>
          <p>{props.body}</p>
          {/* <p>{props.voteCount}</p> */}
        <EstiloFooterCard>
          <div>
            <button> 🔼 </button>
            <span>{props.voteCount}</span>
            <button> 🔽 </button>
          </div>
          <span>{props.commentCount}Comentários</span>
        </EstiloFooterCard>
          
        </ContainerCard>
    </div>
  );
}

export default CardPost;
