import { Container } from './MainContainer.styled';
import backgroundImg from '../../image/backGround.jpg';

export const MainContainer = ({ children }) => {
  return <Container $img={backgroundImg}>{children}</Container>;
};
