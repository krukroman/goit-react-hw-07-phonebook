import { useSelector, useDispatch } from 'react-redux';
import { contactsActions, contactsSelectors } from 'redux/contacts';
import { BsSearch } from 'react-icons/bs';
import s from './ContactsFilter.module.scss';
export default function Filter() {
  const contacts = useSelector(contactsSelectors.getContacts);
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  return (
    <div className={s.wrapper}>
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
    </div>
  );
}
