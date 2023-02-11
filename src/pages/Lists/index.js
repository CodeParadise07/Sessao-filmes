import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { APIKey } from "../../config/key";
import { Genre, GenreList, Background } from "./styles"
import bgFilmes from "../../images/bg-filmes.jpg"

function Lists () {

    const [genres, setGenres] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${APIKey}&language=pt-BR`)
            .then(response => response.json())
            .then(data => setGenres(data.genres))
    }, []);

    return (
        <div>
            <Background src={bgFilmes}/>
            <GenreList>
                {genres.map(genre => {
                    return (
                    <Link to={`/genres/${genre.id}`}>
                        <Genre>
                            <span>{genre.name}</span>
                        </Genre>
                    </Link>
                    )
                })}
            </GenreList>
        </div>
    )
}

export default Lists;