import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';

import Contact from '../Contact';

import s from './ContactsList.module.scss';

export default function ContactsList() {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);

  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.title}>Contacts</h2>
        {contacts.length !== 0 ? (
          <ul className={s.list}>
            {contacts.map(({ id, name, number }) => {
              return (
                <Contact
                  key={id}
                  name={name}
                  number={number}
                  onDelete={() => onDeleteContact(id)}
                />
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
    </section>
  );
}
