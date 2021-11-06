import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return [...contacts]
      .sort((a, b) => a.name.localeCompare(b.name))
      .filter(contact =>
        contact.name.toLocaleLowerCase().includes(normalizedFilter),
      );
  },
);

const contactsSelectors = {
  getContacts,
  getFilter,
  getVisibleContacts,
};

export default contactsSelectors;
