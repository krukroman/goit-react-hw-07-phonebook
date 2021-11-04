import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './contacts-actions';

import isContactExist from 'components/functions/isContactExists';

const items = createReducer([], {
  [contactsActions.addContact]: (state, { payload }) => {
    if (isContactExist(state, payload.name)) {
      alert(`Contact with ${payload.name} allready exists`);
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
