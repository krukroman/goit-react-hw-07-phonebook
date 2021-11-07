import { useSelector } from 'react-redux';
import Header from 'components/Header';
import ContactsEditor from 'components/ContactsEditor';
import ContactsList from 'components/ContactsList';
import { useFetchContactsQuery } from 'redux/contacts/contactsApi';
import { contactsSelectors } from 'redux/contacts';

export default function ContactsPage() {
  const { data: contacts } = useFetchContactsQuery();
  const filterValue = useSelector(
    contactsSelectors.getFilter,
  ).toLocaleLowerCase();

  const getVisibleContacts = (contacts, filterValue) => {
    return [...contacts]
      .sort((a, b) => a.name.localeCompare(b.name))
      .filter(contact =>
        contact.name.toLocaleLowerCase().includes(filterValue),
      );
  };

  return (
    <>
      <Header contactsCount={contacts ? contacts.length : 0} />
      <ContactsEditor contacts={contacts} />
      {contacts && (
        <ContactsList contacts={getVisibleContacts(contacts, filterValue)} />
      )}
    </>
  );
}
