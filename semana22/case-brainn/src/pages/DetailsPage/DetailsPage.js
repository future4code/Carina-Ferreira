import React from 'react'
import Logo from '../../img/logo.png'
import {EstiloLogo, EstiloHeader, EstiloPainel} from './styled';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';
import { API_KEY } from '../../constants/api_key';
import { useParams } from 'react-router-dom';

const DetailsPage = () => {
    const params = useParams()

    const moviesDetail = useRequestData([], `${BASE_URL}/movie/${params.id}${API_KEY}`)[0]
    console.log(moviesDetail)

  return (
    <div>
        <EstiloHeader>
            <EstiloLogo src = {Logo}/>
        </EstiloHeader>

        <EstiloPainel>
            <div>
                {/* <img src = */}
            </div>
        </EstiloPainel>
    </div>
  );
}

export default DetailsPage;