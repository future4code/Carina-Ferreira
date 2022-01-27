import React from 'react';
import {CardContainer, P, Name} from './styled'

const MovieCastCard = (props) => {
    return (
        <CardContainer>
           <img src= {props.poster}/>
           <Name>{props.name}</Name>
           <P>{props.character}</P>
        </CardContainer>
      );
    }
    
    export default MovieCastCard;