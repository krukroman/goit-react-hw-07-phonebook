import PropTypes from 'prop-types';
import s from './Logo.module.scss';

export default function Logo({ text }) {
  return (
    <div className={s.logo_wrapper}>
      <p className={s.logo}>{text}</p>
    </div>
  );
}

Logo.propTypes = {
  text: PropTypes.string,
};
