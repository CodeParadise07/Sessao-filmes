import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { APIKey } from "../../config/key";
import { Container, Buttons } from "./styles";
import apiUrl from "../../config/apiUrl";
import { ButtonTrailer } from "../../components/ButtonTrailer";

export function Details() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    const { id } = useParams();

    const [movie, setMovie] = useState({});

    const image_path = "https://image.tmdb.org/t/p/w500";

    const storedMovies = JSON.parse(localStorage.getItem("favoriteMovies")) || [];

    const [isFavorite, setIsFavorite] = useState(false);

    const checkIsFavorite = () => {
        const isCurrentMovieFavorite = storedMovies.some(
            (movie) => movie.id === id
        );
        setIsFavorite(isCurrentMovieFavorite);
    };

    const handleFavorite = () => {
        const newMovie = {
            id: movie.id,
            title: movie.title,
            image: movie.image,
        };
        localStorage.setItem(
            "favoriteMovies",
            JSON.stringify([...storedMovies, newMovie])
        );
        setIsFavorite(true);
    };

    const handleUnfavorite = () => {
        const filteredMovies = storedMovies.filter((movie) => movie.id !== id);
        localStorage.setItem("favoriteMovies", JSON.stringify(filteredMovies));
        setIsFavorite(false);
    };

    const getDetail = async () => {
        try {
            const response = await apiUrl.get(
                `movie/${id}?api_key=${APIKey}&language=pt-BR`
            );
            const { title, poster_path, overview, release_date } =
                response.data;
            const movieData = {
                id,
                title,
                sinopse: overview,
                image: `${image_path}${poster_path}`,
                releaseDate: release_date,
            };
            setMovie(movieData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getDetail();
        checkIsFavorite();
    }, [id]);

    return (
        <Container>
            <div className="movie">
                <img src={movie.image} alt={movie.sinopse} />
                <div className="details">
                    <h1>{movie.title}</h1>
                    <span>Sinopse: {movie.sinopse}</span>
                    <span className="release-date">
                        Data de Lançamento: {movie.releaseDate}
                    </span>
                    <Buttons>
                        <ButtonTrailer movieId={movie.id} />
                        <button
                            onClick={
                                isFavorite ? handleUnfavorite : handleFavorite
                            }
                        >
                            {isFavorite ? "Remover dos favoritos" : "Favoritar"}
                        </button>
                        <button onClick={handleBack}>Voltar</button>
                    </Buttons>
                </div>
            </div>
        </Container>
    );
}
