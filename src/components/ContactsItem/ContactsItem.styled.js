import styled from "styled-components";

export const ContactDescr = styled.p`
    margin-right: 10px;
    font-size: 26px;

    font-weight: 500;

    @media (max-width: 425px) {
      font-size: 16px;
      margin-bottom: 4px;
   }
`;

export const ContactDescrNumb = styled.span`
    display: flex;
    align-items: center;

    margin-right: 18px;

    font-size: 24px;

    @media (max-width: 425px) {
      font-size: 16px;
      margin-bottom: 10px;
   }
`;

export const BtnDelete = styled.button`
    background-color: rgb(112, 155, 212);
    color: white;

    border-color: red; 
    border-radius: 8px;

    cursor: pointer;

    &:hover,
    :focus{
        background-color: rgb(224, 77, 102); 
    }
`;