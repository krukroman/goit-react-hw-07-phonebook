import Contact from '../Contact';
import PropTypes from 'prop-types';
import s from './ContactsList.module.scss';

export default function ContactsList({ contacts }) {
  const isDataRecived = contacts && contacts.length > 0;
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.title}>Contacts</h2>
        {isDataRecived ? (
          <ul className={s.list}>
            {contacts.map(({ id, name, number }) => {
              return <Contact key={id} id={id} name={name} number={number} />;
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

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }).isRequired,
  ),
};
