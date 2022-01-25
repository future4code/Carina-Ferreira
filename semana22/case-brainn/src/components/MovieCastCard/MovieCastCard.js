import React from 'react';
import {CardContainer} from './styled'

const MovieCastCard = (props) => {
    return (
        <CardContainer>
           <img src= {props.poster}/>
           <p>{props.name}</p>
           <p>{props.character}</p>
        </CardContainer>
      );
    }
    
    export default MovieCastCard;