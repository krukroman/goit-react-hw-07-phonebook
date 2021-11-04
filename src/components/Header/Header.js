import ContactsFilter from 'components/ContactsFilter';
import s from './Header.module.scss';

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <p className={s.title}>Phonebook</p>
        <ContactsFilter />
        <button
          type="button"
          className={s.login_btn}
          aria-label="for future login btn"
        >
          Login
        </button>
      </div>
    </header>
  );
}
