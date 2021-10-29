import React from "react";
import styled from 'styled-components'
// import { useHistory } from "react-router";
// import { goToPost } from "../../routes/coordinator";
// import AddCircleIcon from '@mui/icons-material/AddCircle';
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
text-transform: capitalize;
// cursor: pointer;
`
const EstiloFooterCard=styled.div`
display: flex;
width: 300px;
justify-content: space-between;
`

const CardPost = (props) => {
  // const history = useHistory ()
  // const params = useParams();

  // const comments = useRequestData({},`${BASE_URL}/posts/${params.id}/comments`)
  // console.log("Oi, eu sou o comments",comments)

  // const onClickPost = () => {
  //   goToPost(history)
  //   console.log(onClickPost)
  // }

  return (
    <div>
        <ContainerCard>
          <br/>
          <button onClick={props.onClick}> ⏩ </button>
          <h3>{props.username}</h3>
          <p>{props.title}</p>
          <p>{props.body}</p>
          <EstiloFooterCard>
            <div>
              <button> 🔼 </button>
              0 
              <button> 🔽 </button>
            </div>
            <div>Comentários</div>
          </EstiloFooterCard>
          
        </ContainerCard>
    </div>
  );
}

export default CardPost;
