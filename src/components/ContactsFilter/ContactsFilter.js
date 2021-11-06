import { useSelector, useDispatch } from 'react-redux';
import { contactsActions, contactsSelectors } from 'redux/contacts';
import s from './ContactsFilter.module.scss';
export default function Filter() {
  const contacts = useSelector(contactsSelectors.getContacts);
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <span className={`material-icons-outlined ${s.icon_search}`}>
          search
        </span>
        <input
          className={s.input}
          type="text"
          value={value}
          autoComplete="off"
          autoFocus
          onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
          placeholder={`Contacts: ${contacts.length}`}
        />
      </div>
    </div>
  );
}
