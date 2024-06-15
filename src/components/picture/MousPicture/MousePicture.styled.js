import styled from "styled-components";

export const MickeyMouse = styled.div`
   width: 175px;
   height: 200px;
   position: absolute;
   top: 235px;
   right: 75px;

   background-image: url('./mickey-mouse.png');
   background-size: 180px, cover;
   background-repeat: no-repeat;
   background-position: center;

   z-index: 10;

   @media (max-width: 425px) {
      width: 175px;
      height: 200px;
      top: -16px;
      background-size: 140px, cover;
   }
`;