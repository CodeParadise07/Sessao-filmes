import styled from "styled-components";

export const Container = styled.div`
    padding: 3.3rem 0;
    
    h1 {
        margin: 0 0 3rem 0;
    }

    .movie {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 300px;
        border-radius: 1rem;
    }

    .details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 4rem;
        max-width: 50%;
    }

    @media (max-width: 550px) {
        .movie {
            flex-direction: column;
        }

        .details {
            justify-content: center;
            align-items: center;
            max-width: 100%;
            padding: 2rem 1.5rem;
            margin: 0;
            font-size: 120%;
        }

        

        img {
            width: 100%;
        }
    }

    button {
        background-color: #8218c9;
        border: none;
        cursor: pointer;
        border-radius: 1rem;
        color: #fff;
        padding: 0.8rem 2rem;
        margin-top: 1rem;
        font-size: 100%;
        transition: all 0.3s;
    }

    button:hover {
        background-color: #5b2085;
    }

    span {
        line-height: 130%;
        margin-bottom: 1rem;
        font-size: 120%;
    }

    .release-date {
        opacity: 0.5;
    }
`

export const Buttons = styled.div`
    display: flex;
    gap: 1rem;
`
