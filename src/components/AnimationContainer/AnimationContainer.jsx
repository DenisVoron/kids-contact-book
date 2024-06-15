import { Typography } from '@mui/material';

import { ContainerArea, ListCircles } from './AnimationContainer.styled';
import { WrapperPictures } from 'components/WrapperPictures';

export const AnimationContainer = () => {
  return (
    <>
      <ContainerArea>
        <WrapperPictures />
        <Typography
          variant="h2"
          component="h1"
          sx={{
            width: { xs: '325px', sm: '650px' },
            fontSize: { xs: '2rem', sm: '3.75rem' },
            margin: '0 auto',
            paddingTop: '10rem',
            textAlign: 'center',
            color: 'primary.dark',
            textShadow: '-1px 0 #ffff, 0 1px #ffff, 1px 0 #ffff, 0 -1px #ffff',
          }}
        >
          Hello my young friend! Save your first acquaintances.
        </Typography>
        <ListCircles>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ListCircles>
      </ContainerArea>
    </>
  );
};
