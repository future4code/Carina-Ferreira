import React from 'react'
import Logo from '../../img/logo.png'
import Ellipse from '../../img/Ellipse.png'
import {EstiloLogo, EstiloHeader, EstiloPainel, ScrollCast, EstiloIMG, EstiloIMGTrailer, Título, H2, H1, H3, P, Body, H33, H3S} from './styled';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL, IMG_details } from '../../constants/urls';
import { API_KEY } from '../../constants/api_key';
import { useParams } from 'react-router-dom';
import { goHome, goToMovieDetails } from '../../routes/coordinator';
import { useHistory } from "react-router-dom";
import MovieCastCard from '../../components/MovieCastCard/MovieCastCard';
import MovieCard from '../../components/MovieCard/MovieCard';
import { IMG, IMG_trailer } from '../../constants/urls';

const DetailsPage = () => {
    const params = useParams()
    const history = useHistory()

    const onClickCard = (id) =>{
      goToMovieDetails(history, id)
    }

    const onClickLogo = () =>{
      goHome(history)
    }


    console.log("PARAMS:", params)
    const movie_id = params.id

    const moviesDetail = useRequestData([], `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=pt-BR`)[0]

    const moviesCredits = useRequestData([], `${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}&language=pt-BR`, "cast")[0]

    const moviesRecommendations = useRequestData([], `${BASE_URL}/movie/${movie_id}/recommendations?api_key=${API_KEY}`, "results")[0]
    

  
    const movieCastList = 
    moviesCredits && moviesCredits.map((movieCast) => { 
    return (
      <MovieCastCard
        key = {movieCast.id}
        poster={IMG + movieCast.profile_path}
        name= {movieCast.name}
        character = {movieCast.character}
      />

    )
  })

  const movieCards = 
  moviesRecommendations && moviesRecommendations.map((movie, index) => { 
  return (
    <MovieCard
      key = {movie.id}
      poster={IMG + movie.poster_path}
      title= {movie.title}
      date={movie.release_date}
      onClick={() => onClickCard(movie.id)}
    />

  )
})

    return (
    <div>
        <EstiloHeader>
            <EstiloLogo src = {Logo} onClick={() => onClickLogo()}/>
        </EstiloHeader>

        <EstiloPainel>
            <EstiloIMG src= {IMG_details + moviesDetail.poster_path}/>
            <div>
              <H1>{moviesDetail.original_title}({moviesDetail.release_date})</H1>
              <br/>
              <H3>{moviesDetail.vote_average}</H3>
              <img src = {Ellipse}></img>
              <H33>Avaliação</H33>
    
              <H3S>Sinopse:</H3S>
              <P>{moviesDetail.overview}</P>

            </div>
        </EstiloPainel>

        <H2>Elenco original</H2>
        <br/>
        <ScrollCast>{movieCastList}</ScrollCast>
        <Título>Trailer</Título>
        <EstiloIMGTrailer src= {IMG_trailer + moviesDetail.backdrop_path}/>

        <br/>
        <Título> Recomendações</Título>
        <Body>{movieCards}</Body>
       
        
          
    </div>
  );
}

export default DetailsPage;