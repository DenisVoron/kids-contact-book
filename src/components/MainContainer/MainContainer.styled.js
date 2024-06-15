import styled from "styled-components";

export const Container = styled.div`
   width: 100vw;
   height: 100vh;
   background-image:linear-gradient(90deg, rgba(179,184,184,0.6138830532212884) 100%,rgba(164,164,170,0.4206057422969187) 100%),
   url(${props => props.$img || "#BF4F74"});
   background-size: cover;
   background-attachment: fixed;
`;