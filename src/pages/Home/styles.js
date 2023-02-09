import styled from 'styled-components'

export const Container = styled.div`
    h2 {
        text-align: center;
        margin: 4rem 0;
    }

    .Hero-Movie {
        display: flex;
        align-items: center;
    }

    .Hero-Movie img {
        padding: 2rem;
        max-width: 30rem;
        border-radius: 3rem;
    }

    .Hero-Title {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 800px;
    }

    .Hero-Title h1 {
        font-size: 3rem;
    }

    .Hero-Title :nth-child(2) {
        font-size: 2rem;
    }

    .Hero-Title :nth-child(3) {
        font-size: 1.4rem;
    }

    @media (max-width: 835px) {
    .Hero-Movie {
      flex-direction: column;
    }

    .Hero-Movie img {
      max-width: 100%;
    }

    .Hero-Title {
        text-align: center;
      margin: 0 2rem;
    }

    .Hero-Title h1 {
        font-size: 2rem;
    }

    .Hero-Title :nth-child(2) {
        font-size: 1rem;
    }

    .Hero-Title :nth-child(3) {
        font-size: 0.8rem;
        
    }

  }
`
export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
`

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
`