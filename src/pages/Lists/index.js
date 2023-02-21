import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { APIKey } from "../../config/key";
import { Genre, GenreList, Background } from "./styles";
import bgFilmes from "../../images/bg-filmes.jpg";
import apiUrl from "../../config/apiUrl";

function Lists() {
    const [genres, setGenres] = useState([]);

    const getGenres = async () => {
        try {
            const response = await apiUrl.get(
                `genre/list?api_key=${APIKey}&language=pt-BR`
            );

            const data = response.data.genres;

            setGenres(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getGenres();
    }, []);

    return (
        <div>
            <Background src={bgFilmes} />
            <GenreList>
                {genres.map((genre) => {
                    return (
                        <Genre key={genre.id}>
                            <Link to={`/genres/${genre.id}`}>
                                <span>{genre.name}</span>
                            </Link>
                        </Genre>
                    );
                })}
            </GenreList>
        </div>
    );
}

export default Lists;
