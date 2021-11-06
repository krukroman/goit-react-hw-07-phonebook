import PropTypes from 'prop-types';
import s from './Button.module.scss';

export default function Button({ text }) {
  return (
    <button
      type="button"
      className={s.btn}
      disabled={true}
      aria-label="for future login btn"
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
};
