import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';

import Header from 'components/Header';
import ContactsEditor from 'components/ContactsEditor';
import ContactsList from 'components/ContactsList';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <ContactsEditor />
      <ContactsList />
    </>
  );
}
