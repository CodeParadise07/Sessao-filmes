import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 70px;
    background-color: #2e1042;
    font-size: 1.2rem;

    > span {
        display: flex;
        gap: 0.5rem;

        a {
            text-decoration: none;
            color: #fff;
            transition: .3s ease-out;
        }

        a:hover {
            color: #7717B8;
        }
    }
`;
