import React from 'react';
import { PageContainer, Logo} from './styled';
import Select from '../../components/Select/Select';
import Icon from '../../img/iconn.png'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls';


const HomePage = () => {

  const list = useRequestData([],  `${BASE_URL}/loterias-concursos`)
  console.log("OI, sou a requisição:", list)

  console.log("O Q ESTÁ ACONTECENDO")


  return (
    <PageContainer>
      <Logo src= {Icon}/>
      <h1>Escolha um tipo de loteria:</h1>
      <Select/>
    </PageContainer>
  );
}

export default HomePage;