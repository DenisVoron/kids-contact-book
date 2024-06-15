import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContactById } from 'redux/contacts/operations';

import {
  BtnDelete,
  ContactDescr,
  ContactDescrNumb,
} from './ContactsItem.styled';

export const ContactsItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <>
      <ContactDescr>{name} :</ContactDescr>
      <ContactDescrNumb>{number}</ContactDescrNumb>
      <BtnDelete onClick={() => dispatch(removeContactById(id))}>
        Delete
      </BtnDelete>
    </>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
