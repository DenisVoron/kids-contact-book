import styled from "styled-components";

export const Pluto = styled.div`
    width: 200px;
    height: 220px;
    position: absolute;
    top: 235px;
    left: 45px;
    
    background-image: url('./pluto.png');
    background-size: 180px, cover;
    background-repeat: no-repeat;
    background-position: center;
    
    z-index: 10;

    @media (max-width: 425px) {
      width: 137px;
      height: 177px;
      top: 408px;
      left: 19px;
      background-size: 140px, cover;
    }
`;