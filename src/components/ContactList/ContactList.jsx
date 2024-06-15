import { useSelector } from 'react-redux';
import { selectIsLoading, selectVisibleContact } from 'redux/contacts';

import { ContactsItem } from 'components/ContactsItem';
import { List, ListItem } from './ContactList.styled';
import { Loader } from 'components/Loader';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContact);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && <Loader />}
      <List>
        {contacts?.map(({ id, name, number }) => (
          <ListItem key={id}>
            <ContactsItem id={id} name={name} number={number} />
          </ListItem>
        ))}
      </List>
    </>
  );
};
