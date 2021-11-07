import Logo from 'components/Logo';
import ContactsFilter from 'components/ContactsFilter';
import UserInfo from 'components/UserInfo';
import Button from 'components/Button';
import PropTypes from 'prop-types';
import s from './Header.module.scss';

export default function Header({ contactsCount }) {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <Logo text="Phonebook" />
        <ContactsFilter contactsCount={contactsCount} />
        <div className={s.info_wrapper}>
          <UserInfo mail="user@mail.com" />
          <Button text="Exit" />
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  contactsCount: PropTypes.number.isRequired,
};
