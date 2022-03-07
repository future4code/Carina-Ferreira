import React from 'react';
import SearchIcon from '../../img/search.png';
import { InputContainer } from './styled';
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls';

const Search = ({value, onChange}) => {
    
    const onChangeText = (event) => {
        onChange(event.target.value)
      }

return <InputContainer 
            type="search" 
            value={value} 
            onChange={onChangeText}
        />
}

export default Search;