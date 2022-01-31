import React from 'react';
import { PageContainer, SideBar, WhiteBar, Logo, Title, Text, Numbers, TextStyle } from './styled';
import Select from '../../components/Select/Select';
import Icon from '../../img/iconn.png';
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls';

const MegaSena = () => {

  // const movies = useRequestData([], `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${offset + 1}`, "results")[0]

  // const list = useRequestData({} `${BASE_URL}/loterias`)
  // console.log(list)

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
        <Numbers><strong>23</strong></Numbers>
        <TextStyle>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</TextStyle>
      </WhiteBar>

    </PageContainer>
  );
}

export default MegaSena;