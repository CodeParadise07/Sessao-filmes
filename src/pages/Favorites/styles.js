import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    min-height: 100vh;
    padding-bottom: 5rem;

    div {
        display: flex;
        justify-content: center;
        text-align: center;
        padding: 3rem;
    }

    h2 {
        background-color: #7100a6;
        padding: 1rem;
        border-radius: 5px;
    }
`;

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
`;

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.1rem;

    img {
        width: 180px;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }

    span {
        font-weight: bold;
        font-size: 120%;
        text-align: center;
    }

    a {
        transition: all 0.3s;
    }

    a:hover {
        transform: scale(1.1);
    }
`;
