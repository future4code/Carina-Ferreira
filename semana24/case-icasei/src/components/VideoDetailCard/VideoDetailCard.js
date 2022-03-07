import React from 'react';
import { CardContainer, Description, ImgContainer, TitleContainer, LikeContainer, CountContainer, ViewCount } from './styled';
import Back from '../../img/back.png';
import Like from '../../img/like.png';
import Dislike from '../../img/dislike.png';
import Eye from '../../img/eye.png'


const VideoDetailCard = (props) => {

  return (
 
    <CardContainer>
      <TitleContainer>
        <ImgContainer src= {Back}/>
        <h2> {props.title} </h2>
      </TitleContainer>
      <iframe src='https://youtube.com/embed/{{props.VIDEO_ID}}'/>
      <CountContainer>
        <h4> {props.channelTitle} </h4>
        <LikeContainer src={Like}/>
        <p> {props.likeCount} </p>
      </CountContainer>
      <Description> {props.description} </Description>
      <CountContainer>
        <ViewCount src={Eye}/>
        <p>{props.viewCount}</p>
      </CountContainer>
    </CardContainer>
  );
}

export default VideoDetailCard;