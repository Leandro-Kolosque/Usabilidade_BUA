import React, {useState, useEffect}from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const API_KEY ="1dfdaa624e815a1f6646a1bd0e8959c5";
const MOVIE_API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`;


function MovieList(){
  const [movies, setMovies] = useState([]);

  useEffect(() =>  {
  axios.get(MOVIE_API_URL).then((response) => {
    setMovies(response.data.results);

  });
}, []);

return(
<div>
  {movies.map((movie) => (
    <MovieCard key={movie.id}  movie={movie}/>
    ))}
</div>
);

}

export default MovieList;