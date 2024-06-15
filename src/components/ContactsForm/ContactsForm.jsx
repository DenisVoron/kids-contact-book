import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import { selectContacts } from 'redux/contacts/selectors';
import { createContact } from 'redux/contacts/operations';
import { checkNameContact } from 'utils';

import { ErrorMsg } from './ContactsForm.styled';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const regexForName =
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const validationMessageForName =
  "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";

const regexForNumber = /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/;
const validationMessageForNumber =
  'Phone number must be digits(no less than ten) and can contain spaces, dashes, parentheses and can start with +';

export const ContactsForm = ({ toggleModal }) => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleSubmitForm = user => {
    const { name } = user;
    if (checkNameContact(contacts, name)) {
      dispatch(createContact(user));
    }
    toggleModal();
    reset();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create Contact
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(handleSubmitForm)}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="outlined-helperText"
            label="Enter Name"
            name="name"
            autoFocus
            helperText="Important Name"
            {...register('name', {
              required: 'Name is required',
              pattern: {
                value: regexForName,
                message: validationMessageForName,
              },
            })}
          />
          {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
          <TextField
            margin="normal"
            required
            fullWidth
            id="outlined-number"
            name="number"
            label="Enter Number Telephone"
            type="number"
            {...register('number', {
              required: 'Number is required',
              pattern: {
                value: regexForNumber,
                message: validationMessageForNumber,
              },
            })}
          />
          {errors.number && <ErrorMsg>{errors.number.message}</ErrorMsg>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2">
                {'changed my mind'}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

ContactsForm.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
