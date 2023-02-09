import { Container, MovieList, Movie } from "./styles";
import { APIKey } from '../../config/key'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home () {

    const [movies, setMovies] = useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect( () => {
        //consumir api

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=pt-BR&page=1`)
            .then(response => response.json())
            .then(data => setMovies(data.results))
    }, [])

    useEffect( () => {
        document.title = "Sessão Fácil"
    }, [])

    return (
        <Container>
            {movies.slice(0, 1).map(movie => {
                return(
                    <div className="Hero-Movie" key={movie.id}>
                        <Link to={`./details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} alt={movie.title}/></Link>
                        <div className="Hero-Title">
                            <h1>{movie.title}</h1>
                            <span>Sinopse: {movie.overview}</span>
                            <span className="release-date">Data de Lançamento: {movie.release_date}</span>
                        </div>
                    </div>
                )
            })}

            <h2>Filmes em Destaque</h2>
            <MovieList>
                {movies.slice(1, 16).map(movie => {
                    return(
                        <Movie key={movie.id}>
                            <Link to={`./details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} alt={movie.title}/></Link>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}
            </MovieList>
        </Container>
    )
}

export default Home;