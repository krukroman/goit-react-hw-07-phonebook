import ContactsFilter from 'components/ContactsFilter';
import s from './Header.module.scss';

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.title_wrapper}>
          <p className={s.title}>Phonebook</p>
        </div>
        <ContactsFilter />
        <div className={s.btn_wrapper}>
          <p className={s.user_mail}>user@mail.com</p>
          <button
            type="button"
            className={s.login_btn}
            disabled={true}
            aria-label="for future login btn"
          >
            Exit
          </button>
        </div>
      </div>
    </header>
  );
}
