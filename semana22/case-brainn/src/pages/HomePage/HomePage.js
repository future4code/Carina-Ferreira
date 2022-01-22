import React from "react";
import useRequestData from '../../hooks/useRequestData';
import {BASE_URL} from '../../constants/urls';
import axios from 'axios';
import { API_KEY } from "../../constants/api_key";
import MovieCard from "../../components/MovieCard/MovieCard";


const HomePage = () => {

  
    const movies = useRequestData([], `${BASE_URL}/movie/popular${API_KEY}`)
    console.log(movies)

    const movieCards = 
        movies.map((movie) => { 
        return (
          <MovieCard
            key = {movie.id}
            poster={movie.poster_path}
            title= {movie.title}
            date={movie.release_date}
          />
    
        )
      })
  
  
  
    return (
      <div>
          {movieCards}
      </div>
    );
  }
  
  export default HomePage;