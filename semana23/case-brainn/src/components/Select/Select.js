import React from 'react';
import { useNavigate } from "react-router-dom";
import { OptionStyle, SelectStyle } from './styled';

const Select = () => {
  const navigate = useNavigate()

  const changeSelect = (event) => {
    navigate(`/${event.target.value}`)
  }


  return (
    <SelectStyle label={"Loterias"} onChange = {changeSelect}>
      <OptionStyle value="/">MEGA-SENA</OptionStyle>
      <OptionStyle value="Quina">QUINA</OptionStyle>
      <OptionStyle value="Lotofacil">LOTOFACIL</OptionStyle>
      <OptionStyle value="Lotomania">LOTOMANIA</OptionStyle>
      <OptionStyle value="Timemania">TIMEMANIA</OptionStyle>
      <OptionStyle value="Dia-de-sorte">DIA DE SORTE</OptionStyle>
    </SelectStyle>
  );
}

export default Select;
