import { useSelector, useDispatch } from 'react-redux';
import { contactsActions, contactsSelectors } from 'redux/contacts';
import PropTypes from 'prop-types';
import s from './ContactsFilter.module.scss';

export default function Filter({ contactsCount }) {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    e.preventDefault();
    const { value } = e.target;
    dispatch(contactsActions.changeFilter(value));
  };

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
          onChange={handleChange}
          placeholder={`Contacts: ${contactsCount}`}
        />
      </div>
    </div>
  );
}

Filter.propTypes = {
  contactsCount: PropTypes.number.isRequired,
};
