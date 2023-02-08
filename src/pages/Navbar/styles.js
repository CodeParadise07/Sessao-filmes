import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #9332D6;
  
    @media (max-width: 1070px) {
        flex-direction: column;
        align-items: center;

        input {
            margin: 19px 0.8rem;
        }

        button {
            margin-top: 1rem;
            padding: 10px
        }
    }
  
    img {
        height: 60px;
        margin: 1rem;
    }
  
    input {
        outline: none;
        border: none;
        background: #D9D9D9;
        width: 100%;
        width: 400px;
        padding: 0.8rem 1rem;
        margin: 19px 0.8rem;
        border-radius: 5px;
        font-size: 1.4rem;
    }

    input::placeholder {
        text-align: center;
        font-weight: bold;
        color: rgba(136, 136, 136, 0.38);
        font-size: 1.4rem;
    }

    button {
        padding: 0.3rem 2rem;
        margin: 0.3rem 0%;
        border: none;
        border-radius: 5px;
    }

    button:hover {
        cursor: pointer;
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