import { FaRegAddressBook } from 'react-icons/fa';
import { Button } from './ButtonAdd.styled';

export const ButtonAdd = ({ onClick }) => {
  return (
    <Button type="button" aria-label="button add contacts" onClick={onClick}>
      <FaRegAddressBook size="35px" />
    </Button>
  );
};
