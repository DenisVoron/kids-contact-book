import styled from "styled-components";


export const Button = styled.button`
    display: block;
    width: 250px;

    margin-left: auto;
    margin-right: auto;

    padding: 18px;

    border: 3px solid white;
    border-radius: 40px;

    background-color:  rgb(112, 155, 212);

    box-shadow: 2px 2px 5px 1px rgba(0,0,0,0.75);

    font-size: 22px;
    font-weight: 600;
    color: white;

    &:hover,
    &:focus{
        border-color:  rgb(112, 155, 212);
    }

    @media (max-width: 320px) {
      width: 220px;
   }
`;