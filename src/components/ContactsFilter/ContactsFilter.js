import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/contacts-selectors';
import contactsActions from 'redux/contacts/contacts-actions';
import s from './ContactsFilter.module.scss';

export default function Filter() {
  const contacts = useSelector(getContacts);
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <div className={s.container}>
      <label className={s.label}>
        Filter by name
        <input
          className={s.input}
          type="text"
          value={value}
          onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
          placeholder={`Contacts: ${contacts.length}`}
        />
      </label>
    </div>
  );
}
