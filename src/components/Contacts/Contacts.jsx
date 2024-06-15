import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Section } from '../Section';
import { Container } from '../Container';
import { Title } from '../Title';
import { ContactsForm } from '../ContactsForm';
import { ContactList } from '../ContactList';
import { Filter } from '../Filter';
import { Modal } from '../Modal';
import { ButtonAdd } from '../ButtonAdd';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError } from 'redux/contacts';
import { ErrorInfo } from 'components/ErrorInfo/ErrorInfo';
import { ContactSectionAnimation } from 'components/ContactSectionAnimation';

export const Contacts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const toggleOpenModal = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <>
      <Section>
        <ContactSectionAnimation position={'down'} delay={0.3}>
          <Container>
            <Title title="PhoneBook" />
            <ButtonAdd onClick={toggleOpenModal} />
            {isOpen && (
              <Modal toggleModal={toggleOpenModal}>
                <ContactsForm toggleModal={toggleOpenModal} />
              </Modal>
            )}
          </Container>
        </ContactSectionAnimation>
      </Section>
      <Section>
        <ContactSectionAnimation position={'down'} delay={0.6}>
          <Container $marginBottom="0">
            <Typography
              variant="h5"
              component="h3"
              sx={{
                margin: '0 auto',
                width: '96px',
                textShadow:
                  '-1px 0 #ffff, 0 1px #ffff, 1px 0 #ffff, 0 -1px #ffff',
              }}
            >
              Contacts
            </Typography>
            <Filter />
            <ContactList />
          </Container>
        </ContactSectionAnimation>
      </Section>
      {error && <ErrorInfo />}
      <ToastContainer />
    </>
  );
};
