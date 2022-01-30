import React from 'react'
import { PageContainer, SideBar, WhiteBar, Logo, Title, Text } from './styled'
import Select from '../../components/Select/Select';
import Icon from '../../components/img/iconn.png'

const MegaSena = () => {

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
          
      </WhiteBar>

    </PageContainer>
  );
}

export default MegaSena;