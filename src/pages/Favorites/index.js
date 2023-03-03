import { useEffect, useState } from "react";
import { Container, MovieList, Movie } from "./styles";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";

export function Favorites() {
    const [movies, setMovies] = useState([]);

    const loadMovies = () => {
        const storedMovies =
            JSON.parse(localStorage.getItem("favoriteMovies")) || [];
        setMovies(storedMovies);
    };

    useEffect(() => {
        loadMovies();
    }, []);

    return (
        <Container>
            <div>
                <h2>Favoritos</h2>
            </div>
            <MovieList>
                {movies.map((movie) => {
                    return (
                        <Movie key={movie.id}>
                            <Link to={`/details/${movie.id}`}>
                                <img src={movie.image} alt={movie.title} />
                            </Link>
                            <span>{movie.title}</span>
                        </Movie>
                    );
                })}
            </MovieList>
            <Footer />
        </Container>
    );
}
