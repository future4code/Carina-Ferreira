import React from 'react';
import { NumbersContainer } from './styled';

const Numbers = (props) => {

  return (
    <NumbersContainer>
      {props.numbers}
    </NumbersContainer>
  );
}

export default Numbers;