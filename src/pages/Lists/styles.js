import styled from 'styled-components'

export const GenreList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 3rem;
    height: 553px;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        width: 100%;
    }
`

export const Genre = styled.li`
    display: flex;
    justify-content: center;

    border-radius: 25px;    
    margin: 0.9rem;

    transition: all 0.3s;
    background-color: #9500DB;
    
    :hover {
        background-color: #7100A6;
        transform: scale(1.1);
    }

    span {
        font-weight: bold;
        font-size: 120%;
        color: #fff;
    }
`

export const Background = styled.img`
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 85vh;
    opacity: 40%;
`