import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/contacts-selectors';
import contactsActions from 'redux/contacts/contacts-actions';
import { BsSearch } from 'react-icons/bs';
import s from './ContactsFilter.module.scss';
export default function Filter() {
  const contacts = useSelector(getContacts);
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <div className={s.container}>
      <BsSearch className={s.icon_search} />
      <input
        className={s.input}
        type="text"
        value={value}
        autoComplete="false"
        autoFocus
        onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
        placeholder={`Contacts: ${contacts.length}`}
      />
    </div>
  );
}
