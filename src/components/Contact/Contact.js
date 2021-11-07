import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import PropTypes from 'prop-types';
import s from './Contact.module.scss';
export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  return (
    <li className={s.item}>
      <div className={s.container}>
        <div className={s.info}>
          <p className={s.name}>{name}</p>
          <p className={s.number}>{number}</p>
        </div>
        <button
          className={s.btn}
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          <span className="material-icons-outlined">
            <span className="material-icons-outlined">delete</span>
          </span>
        </button>
      </div>
    </li>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
