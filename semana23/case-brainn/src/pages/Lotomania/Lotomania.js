// import React { useState } from 'react'
import { PageContainer, SideBar, WhiteBar, Logo, Title, Text, TextStyle } from './styled'
import Select from '../../components/Select/Select';
import Icon from '../../img/iconn.png';
import { BASE_URL } from '../../constants/urls';
import Numbers from '../../components/Numbers/Numbers';
import useRequestData from '../../hooks/useRequestData';



const Lotomania = () => {
  const id = "2167"
  // mega 0 2359
  // quina 1 5534
  // lotof 2 2200
  // lotom 3 2167
  // time 4 1622
  // dia 5 440

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
          LOTOMANIA
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

export default Lotomania;