import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #2E1042;
  
    @media (max-width: 945px) {
        flex-direction: column;
        align-items: center;

        form {
        display: flex;
        align-items: center;
        gap: .5rem;
        margin-top: 1rem;
    }

        
    }
  
    img {
        height: 60px;
        margin: 1rem;
    }

    form {
        display: flex;
        align-items: center;
        gap: .5rem;
    }
  
    input {
        padding: .6rem 1rem;
        border-radius: 4px;
        border: none;
        outline: none;
        background: #D9D9D9;
        font-size: 1.3rem;
    }

    input::placeholder {
        text-align: center;
        font-weight: bold;
        color: rgba(136, 136, 136, 0.38);
    }

    button {
        display: flex;
        align-items: center;
        background-color: #8218c9;
        border: 2px solid #8218c9;
        padding: .4rem 1rem;
        font-size: 1.7rem;
        border-radius: 4px;
        cursor: pointer;
        transition: .4s;
    }

    button:hover {
        background-color: transparent;
        color: #8218c9;
        
    }

`

export const MenuList = styled.ul`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        list-style: none;

        li a {
        color: #fff;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.2rem;
    }
`