import { Alert, AlertTitle } from '@mui/material';
import { Container } from './NotFoundView.styled';

export const NotFoundView = () => {
  return (
    <Container>
      <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        No such page found — <strong>check it out!</strong>
      </Alert>
    </Container>
  );
};
