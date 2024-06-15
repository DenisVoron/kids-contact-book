import styled from "styled-components";

export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgb(0, 0,0, 0.5); 
`;

export const ModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-height: 300px;
    max-width: 600px;
    width: 100%;
    padding: 12px;
    background-color: #fff;
    border-radius:8px;
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75); 
`;


export const BtnClose = styled.button`
    position: absolute;
    top: 4%;
    left:92%;

    padding: 0px;

    border: transparent;
    background-color:transparent;
`;