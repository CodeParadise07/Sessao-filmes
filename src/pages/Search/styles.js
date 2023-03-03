import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    min-height: 100vh;
    padding-bottom: 8rem;
`

export const Title = styled.h2`
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 3rem;

    span {
        background-color: #7100A6;
        padding: 1rem;
        border-radius: 5px;
    }

    @media (max-width: 945px) {
        font-size: 1.6rem;
    }
`