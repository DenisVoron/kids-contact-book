import styled from "styled-components";

export const List = styled.ul`
    width: 550px;

    margin-left: auto;
    margin-right: auto;
    margin-top: 16px;

    @media (max-width: 425px) {
      width: 320px;
   }
`;

export const ListItem = styled.li`
    display: flex;
    justify-content: center;

    padding: 10px;

    border-bottom: 2px solid;
    border-color:  rgb(203, 204, 206);

    transition-property: border-color transform;
    transition-duration: 500ms;
    transition-timing-function: linear;

    &:not(:last-child){
        margin-bottom: 10px;
    }

    &:hover,
    &:focus{
        border-color: rgb(141, 176, 192);
        transform: scale(1.2);
    }

    @media (max-width: 425px) {
        display: block;
        width: 180px;
        margin: 0 auto;
        padding: 10px;

        border: 2px solid rgb(203, 204, 206);
        border-radius: 6px; 

        background-color: #ff784e;
    }
`;