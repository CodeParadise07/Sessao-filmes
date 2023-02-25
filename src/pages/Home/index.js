import { Container } from "./styles";
import { APIKey } from "../../config/key";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiUrl from "../../config/apiUrl";
import { MovieCard } from "../../components/MovieCard";
import { ButtonTrailer } from "../../components/ButtonTrailer";

export function Home() {
    const pageTitle = () => {
        document.title = "Sessão Fácil";
    };

    const [movies, setMovies] = useState([]);
    const image_path = "https://image.tmdb.org/t/p/w500";

    const getMovies = async () => {
        try {
            const response = await apiUrl.get(
                `movie/popular?api_key=${APIKey}&language=pt-BR&page=1`
            );

            const data = response.data.results;

            setMovies(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMovies();
        pageTitle();
    }, []);

    return (
        <Container>
            {movies.slice(0, 1).map((movie) => {
                return (
                    <div className="Hero-Movie" key={movie.id}>
                        <Link to={`/details/${movie.id}`}>
                            <img
                                src={`${image_path}${movie.poster_path}`}
                                alt={movie.title}
                            />
                        </Link>
                        <div className="Hero-Title">
                            <h1>{movie.title}</h1>
                            <span>Sinopse: {movie.overview}</span>
                            <span className="release-date">
                                Data de Lançamento: {movie.release_date}
                            </span>
                            <ButtonTrailer movieId={movie.id} />
                        </div>
                    </div>
                );
            })}

            <h2>Filmes em Destaque</h2>
            <MovieCard movies={movies} />
        </Container>
    );
}
