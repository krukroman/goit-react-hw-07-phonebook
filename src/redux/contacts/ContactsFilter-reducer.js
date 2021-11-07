import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './contacts-actions';

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default filter;
