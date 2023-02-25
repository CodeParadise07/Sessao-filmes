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