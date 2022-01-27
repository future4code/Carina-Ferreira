import React from 'react';
import {CardContainer, CardTitle, MovieDate} from './styled'

const MovieCard = (props) => {
    return (
        <CardContainer onClick={props.onClick}>
           <img src= {props.poster}/>
           <CardTitle>{props.title}</CardTitle>
           <MovieDate>{props.date}</MovieDate>
        </CardContainer>
      );
    }
    
    export default MovieCard;