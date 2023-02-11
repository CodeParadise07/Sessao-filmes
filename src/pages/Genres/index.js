import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { APIKey } from "../../config/key";
import { Movie, MovieList, Title } from "./styles"

function Genres () {

    const { id } = useParams()
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const genre = genres.find(genre => genre.id == id);
    const image_path = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&with_genres=${id}&language=pt-BR`)
            .then(response => response.json())
            .then(data => setMovies(data.results))
    }, [id]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${APIKey}&language=pt-BR`)
            .then(response => response.json())
            .then(data => setGenres(data.genres))
    }, [id]);

    return (
        <div>
            <Title>{genre && <span>Filmes de {genre.name}</span>}</Title>
            <MovieList>
                {movies.map(movie => {
                    return(
                        <Movie key={movie.id}>
                            <Link to={`/details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} alt={movie.title}/></Link>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}
            </MovieList>
        </div>
    )
}

export default Genres;