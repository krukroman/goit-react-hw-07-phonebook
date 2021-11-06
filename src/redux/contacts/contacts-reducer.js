import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { contactsActions } from 'redux/contacts';

import isContactExist from 'functions/isContactExists';

const items = createReducer([], {
  [contactsActions.addContact]: (state, { payload }) => {
    if (isContactExist(state, payload.name)) {
      alert(`Contact with name ${payload.name} allready exists`);
      return;
    }
    return [...state, payload];
  },
  [contactsActions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [contactsActions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
