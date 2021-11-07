import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';

import Header from 'components/Header';
import ContactsEditor from 'components/ContactsEditor';
import ContactsList from 'components/ContactsList';

export default function App() {
  const error = useSelector(contactsSelectors.getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    error && alert(`Error: ${error.message}, Error message: ${error.stack}`);
  }, [error]);

  return (
    <>
      <Header />
      <ContactsEditor />
      <ContactsList />
    </>
  );
}
