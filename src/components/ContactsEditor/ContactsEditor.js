import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { contactsSelectors, contactsOperations } from 'redux/contacts';

import isContactExist from 'functions/isContactExists';

import s from './ContactsEditor.module.scss';

export default function ContactsEditor() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  const inputNameId = nanoid();
  const inputNumberId = nanoid();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isContactExist(contacts, name)) {
      alert(`Contact with name ${name} allready exists`);
      setName('');
      setNumber('');
      return;
    }

    dispatch(
      contactsOperations.addContact({
        name,
        number,
      }),
    );
    setName('');
    setNumber('');
  };

  return (
    <div className={s.container}>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label} htmlFor={inputNameId}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            onChange={handleChange}
            value={name}
            id={inputNameId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={s.label} htmlFor={inputNumberId}>
          Phone number
          <input
            className={s.input}
            type="tel"
            name="number"
            onChange={handleChange}
            value={number}
            id={inputNumberId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}
