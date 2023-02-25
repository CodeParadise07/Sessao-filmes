import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { APIKey } from "../../config/key";
import { Title } from "./styles";
import apiUrl from "../../config/apiUrl";
import { MovieCard } from "../../components/MovieCard";

export function Genres() {
    const { id } = useParams();

    const [movies, setMovies] = useState([]);
    const [genreTitle, setGenreTitle] = useState([]);

    const genre = genreTitle.find((genre) => genre.id == id);

    const getTitle = async () => {
        try {
            const response = await apiUrl.get(
                `genre/list?api_key=${APIKey}&language=pt-BR`
            );

            const data = response.data.genres;

            setGenreTitle(data);
        } catch (error) {
            console.log(error);
        }
    };

    const getMovies = async () => {
        try {
            const response = await apiUrl.get(
                `discover/movie?api_key=${APIKey}&with_genres=${id}&language=pt-BR`
            );

            const data = response.data.results;

            setMovies(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getTitle();
        getMovies();
    }, [id]);

    return (
        <div>
            <Title>
                {genre && <span>Filmes do genêro: {genre.name}</span>}
            </Title>
            <MovieCard movies={movies} />
        </div>
    );
}
