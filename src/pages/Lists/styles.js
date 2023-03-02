import styled from "styled-components";

export const Container = styled.div`
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

export const GenreList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    align-items: center;
    padding: 2rem 0;
    margin: 0 1rem;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        width: 100%;
        padding: 1rem 0;
    }

    @media (max-width: 945px) {
        font-size: 1.2rem;
    }
`;

export const Genre = styled.li`
    display: flex;
    justify-content: center;

    border-radius: 25px;
    margin: 0.9rem;

    transition: all 0.3s;
    background-color: #9500db;

    :hover {
        background-color: #7100a6;
        transform: scale(1.1);
    }

    span {
        font-weight: bold;
        color: #fff;
    }
`;

export const Background = styled.img`
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100vh;
    opacity: 40%;

    @media (max-width: 945px) {
        display: none;
    }
`;
