import { MovieList, Movie } from "./styles";
import { Link } from "react-router-dom";

export function MovieCard(props) {
    const image_path = "https://image.tmdb.org/t/p/w500";

    return (
        <MovieList>
            {props.movies.slice(1, 16).map((movie) => {
                return (
                    <Movie key={movie.id}>
                        <Link to={`/details/${movie.id}`}>
                            <img
                                src={`${image_path}${movie.poster_path}`}
                                alt={movie.title}
                            />
                        </Link>
                        <span>{movie.title}</span>
                    </Movie>
                );
            })}
        </MovieList>
    );
}
