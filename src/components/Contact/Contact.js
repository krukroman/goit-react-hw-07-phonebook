import { MdDelete } from 'react-icons/md';
import PropTypes from 'prop-types';
import s from './Contact.module.scss';
export default function Contact({ name, number, onDelete }) {
  return (
    <li className={s.item}>
      <div className={s.container}>
        <div className={s.info}>
          <p className={s.name}>{name}</p>
          <p className={s.number}>{number}</p>
        </div>
        <button className={s.btn} type="button" onClick={onDelete}>
          <MdDelete />
        </button>
      </div>
    </li>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
