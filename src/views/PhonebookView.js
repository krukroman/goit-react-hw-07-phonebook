import ContactsEditor from 'components/ContactsEditor';
import ContactsList from 'components/ContactsList';
import ContactsFilter from 'components/ContactsFilter';

export default function PhonebookView() {
  return (
    <>
      <ContactsEditor />
      <ContactsFilter />
      <ContactsList />
    </>
  );
}
