import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { MovieCard } from "../../components/MovieCard";
import { APIKey } from "../../config/key";
import apiUrl from "../../config/apiUrl";
import { Title } from "./styles";

export const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchMovies = async () => {
    try {
      const response = await apiUrl.get(
        `search/movie?api_key=${APIKey}&language=pt-BR&page=1&query=${query}`
      );

      const data = response.data.results;

      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearchMovies();
  }, [query]);

  return (
    <div>
      <Title>
          <span>Resultados para: {query}</span>
      </Title>

      <MovieCard movies={movies} />
    </div>
  );
};
