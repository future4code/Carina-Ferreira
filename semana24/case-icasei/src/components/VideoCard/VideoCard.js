import React from 'react';
import { CardContainer, ImgContainer } from './styled';


const VideoCard = (props) => {

  return (
 
    <CardContainer onClick={props.onClick}>
        <ImgContainer src = {props.img}/>
        <h3> {props.title} </h3>
        <h4> {props.channeltitle} </h4>
        <p> {props.description} </p>
        <button>DETALHES DO VÍDEO</button>
    </CardContainer>
  );
}

export default VideoCard;