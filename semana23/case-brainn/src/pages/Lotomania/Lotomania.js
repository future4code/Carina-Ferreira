import React from 'react'
import { PageContainer, SideBar, WhiteBar, Logo, Title, Text, Numbers, TextStyle } from './styled'
import Select from '../../components/Select/Select';
import Icon from '../../img/iconn.png'

const Lotomania = () => {

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
        <Numbers><strong>23</strong></Numbers>
        <TextStyle>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</TextStyle>
      </WhiteBar>

    </PageContainer>
  );
}

export default Lotomania;