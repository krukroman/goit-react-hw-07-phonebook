import { useDeleteContactMutation } from 'redux/contacts/contactsApi';

import PropTypes from 'prop-types';
import s from './Contact.module.scss';
export default function Contact({ id, name, number }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <li className={s.item}>
      <div className={s.container}>
        <div className={s.info}>
          <p className={s.name}>{name}</p>
          <p className={s.number}>{number}</p>
        </div>
        <div className={s.btn_wrapper}>
          <button
            className={`${s.btn}, ${s.btn_edit}`}
            type="button"
            disabled="disabled"
          >
            <span className="material-icons-outlined">edit</span>
          </button>
          <button
            className={`${s.btn}, ${s.btn_delete}`}
            type="button"
            onClick={() => deleteContact(id)}
            disabled={isDeleting}
          >
            <span className="material-icons-outlined">delete</span>
          </button>
        </div>
      </div>
    </li>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
