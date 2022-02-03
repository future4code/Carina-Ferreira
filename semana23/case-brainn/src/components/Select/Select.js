import React from 'react';
import { useNavigate } from "react-router-dom";
import { OptionStyle, SelectStyle } from './styled';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';

const Select = () => {
  const navigate = useNavigate()

  const changeSelect = (event) => {
      event.preventDefault();
    navigate(`/${event.target.value}`)
  }

  const list = useRequestData([],  `${BASE_URL}/loterias-concursos`)
  console.log("OI, sou listaaa:", list)

  return (
    <SelectStyle label={"Loterias"} onChange = {changeSelect}>
      <OptionStyle>Selecione</OptionStyle>
      <OptionStyle value="Megasena">MEGA-SENA</OptionStyle>
      <OptionStyle value="Quina">QUINA</OptionStyle>
      <OptionStyle value="Lotofacil">LOTOFACIL</OptionStyle>
      <OptionStyle value="Lotomania">LOTOMANIA</OptionStyle>
      <OptionStyle value="Timemania">TIMEMANIA</OptionStyle>
      <OptionStyle value="Dia-de-sorte">DIA DE SORTE</OptionStyle>
    </SelectStyle>
  );
}

export default Select;
