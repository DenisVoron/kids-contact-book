import styled from "styled-components";

export const WinniePooh = styled.div`
    width: 210px;
    height: 230px;
    position: absolute;
    top: 28rem;
    right: 570px;
    
    background-image: url('./winnie-pooh.png');
    background-size: 120px, cover;
    background-repeat: no-repeat;
    background-position: center;
    
    z-index: 10;

    @media (max-width: 425px) {
      width: 137px;
      height: 177px;
      top: 408px;
      left: 225px;
      background-size: 100px, cover;
    }
`;