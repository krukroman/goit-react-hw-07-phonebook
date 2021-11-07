import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { contactsActions } from 'redux/contacts';

const items = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (_, { payload }) => payload,
  [contactsActions.addContactSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [contactsActions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [contactsActions.changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [contactsActions.fetchContactsError]: (_, { payload }) => payload,
  [contactsActions.addContactError]: (_, { payload }) => payload,
  [contactsActions.deleteContactError]: (_, { payload }) => payload,
  [contactsActions.fetchContactsRequest]: () => null,
  [contactsActions.addContactRequest]: () => null,
  [contactsActions.deleteContactRequest]: () => null,
});

export default combineReducers({
  items,
  filter,
  error,
});
