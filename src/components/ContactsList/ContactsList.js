import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';
import contactsActions from 'redux/contacts/contacts-actions';
import Contact from '../Contact';

import s from './ContactsList.module.scss';

export default function ContactsList() {
  const contacts = useSelector(getVisibleContacts);

  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(contactsActions.deleteContact(id));
  return (
    <div className={s.container}>
      <h2 className={s.title}>Contacts</h2>
      {contacts.length !== 0 ? (
        <ul className={s.list}>
          {contacts.map(({ id, name, number }) => {
            return (
              <li key={id} className={s.item}>
                <Contact
                  name={name}
                  number={number}
                  onDelete={() => onDeleteContact(id)}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={s.status}>
          Contacts list is empty, or filtered name doesn`t exists. Please add
          contact, or type correct query in filter
        </p>
      )}
    </div>
  );
}
