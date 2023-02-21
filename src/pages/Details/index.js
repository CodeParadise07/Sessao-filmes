import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { APIKey } from "../../config/key";
import { Container } from "./styles";
import apiUrl from "../../config/apiUrl";

function Details() {
    const { id } = useParams();

    const [movie, setMovie] = useState({});

    const image_path = "https://image.tmdb.org/t/p/w500";

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
                    <Link to="/">
                        <button>Voltar</button>
                    </Link>
                </div>
            </div>
        </Container>
    );
}

export default Details;
