import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter';

import { Container } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const filterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Container>
      <TextField
        id="standard-search"
        label="Find contacts by name"
        type="search"
        variant="standard"
        sx={{ marginBottom: '10px' }}
        onChange={filterChange}
      />
    </Container>
  );
};
