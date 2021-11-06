export default function isContactExist(contacts, name) {
  const normalizeedName = name.toLocaleLowerCase();
  return contacts.find(contact =>
    contact.name.toLocaleLowerCase().includes(normalizeedName),
  );
}
