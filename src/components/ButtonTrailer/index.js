import { ModalTrailer } from "../ModalTrailer";
import { Container } from "./styles";
import apiUrl from "../../config/apiUrl";
import { APIKey } from "../../config/key";
import { useEffect, useState, useRef } from "react";

export const ButtonTrailer = ({ movieId }) => {
    const modalRef = useRef(null);
    const [trailerUrl, setTrailerUrl] = useState("");

    const handleClick = () => {
        if (trailerUrl) {
            modalRef.current.openModal();
        } else {
            alert(
                "Desculpe, não foi possível encontrar um trailer para este filme."
            );
        }
    };

    const getTrailerUrl = async () => {
        try {
            const response = await apiUrl.get(
                `movie/${movieId}/videos?api_key=${APIKey}&language=pt-BR`
            );
            const videos = response.data.results;
            const trailer = videos.find(
                (video) => video.type === "Trailer" && video.site === "YouTube"
            );
            if (trailer) {
                setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}`);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getTrailerUrl();
    }, [movieId]);

    return (
        <Container>
            <ModalTrailer ref={modalRef} title="X" trailerUrl={trailerUrl} />
            <button onClick={handleClick}>Ver trailer</button>
        </Container>
    );
};
