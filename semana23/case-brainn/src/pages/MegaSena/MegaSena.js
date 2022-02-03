import React from 'react';
import { PageContainer, SideBar, WhiteBar, Logo, Title, Text, TextStyle, Mark } from './styled';
import Select from '../../components/Select/Select';
import Icon from '../../img/iconn.png';
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls';
import Numbers from '../../components/Numbers/Numbers';

const MegaSena = () => {

  const id = "2359"

  const list = useRequestData([],  `${BASE_URL}/loterias-concursos`)
  console.log("OI, sou listaaa:", list)

  const listById = useRequestData([list],  `${BASE_URL}/concursos/${id}`)
  console.log("OI, sou a requisição:", listById)



  const numberslistById = 
  listById && listById.map((number) => { 
 
  return (
    <Numbers
      key = {number.id}
      numbers = {number.numeros}
    />

  )
})


  return (
    <PageContainer>
      <SideBar>
        <Select/>
        <Title>
          <Logo src={Icon}/>
          MEGA-SENA
        </Title>

        <Text>
          concurso<br/>
          <b>4531 - 07/04/2020</b>
        </Text>
      </SideBar>

      <WhiteBar>
        <strong>{numberslistById}</strong>
        <TextStyle>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</TextStyle>
      </WhiteBar>

    </PageContainer>
  );
}

export default MegaSena;