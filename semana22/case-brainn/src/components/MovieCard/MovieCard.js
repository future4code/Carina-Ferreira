import React from 'react';
import {CardContainer} from './styled'

const MovieCard = (props) => {
    return (
        <CardContainer onClick={props.onClick}>
           <img src= {props.poster}/>
           <p>{props.title}</p>
           <p>{props.date}</p>
        </CardContainer>
      );
    }
    
    export default MovieCard;