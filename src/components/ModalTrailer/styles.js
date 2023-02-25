import styled from "styled-components";

export const Modal = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    /* background-color: rgba(52, 52, 50, 0.749); */
    background-color: rgba(255, 255, 255, 0.212);
    backdrop-filter: blur(6px);
    opacity: 0;
    visibility: hidden;

    &.open {
        opacity: 1;
        visibility: visible;
    }
`;

export const ContentModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    border-radius: 5px;
    gap: 15px;

    span {
        font-family: "Roboto", sans-serif;
        background-color: #ffffff;
        color: #f03a17;
        font-weight: bold;
        font-size: 20px;
        width: 40px;
        text-align: center;
        cursor: pointer;
        border-radius: 10px;
    }

    iframe {
        border-width: 0;
        width: 640px;
        height: 360px;
    }
`;
