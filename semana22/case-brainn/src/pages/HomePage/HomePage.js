import React, { useState } from "react";
import useRequestData from '../../hooks/useRequestData';
import {BASE_URL} from '../../constants/urls';
import {Body, EstiloHeader} from './styled'
import { API_KEY } from "../../constants/api_key";
import {IMG} from '../../constants/urls'
import MovieCard from "../../components/MovieCard/MovieCard";
import Header from "../../components/Header/Header";
import { useHistory } from "react-router-dom";
import { goToMovieDetails } from "../../routes/coordinator";
import Pagination from "../../components/Pagination/Pagination";


const HomePage = () => {
    const [offset, setOffset] = useState(0);
    const history = useHistory()

    const movies = useRequestData([], `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${offset + 1}`, "results")[0]

    const onClickCard = (id) =>{
      goToMovieDetails(history, id)
    }


    const movieCards = 
        movies.map((movie) => { 
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
          <Header/>
        </EstiloHeader>

        <Body> {movieCards} </Body>

        <div>
          <Pagination 
          limit={20} 
          total={1000} 
          offset={offset}
          setOffset={setOffset}
          
          />
        </div>
      
      </div>
    );
  }
  
  export default HomePage;