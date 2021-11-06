import Logo from 'components/Logo';
import ContactsFilter from 'components/ContactsFilter';
import UserInfo from 'components/UserInfo';
import Button from 'components/Button';
import s from './Header.module.scss';

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <Logo text="Phonebook" />
        <ContactsFilter />
        <div className={s.info_wrapper}>
          <UserInfo mail="user@mail.com" />
          <Button text="Exit" />
        </div>
      </div>
    </header>
  );
}
