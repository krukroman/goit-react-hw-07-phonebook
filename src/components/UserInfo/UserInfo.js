import PropTypes from 'prop-types';
import s from './UserInfo.module.scss';

export default function UserInfo({ mail }) {
  return <p className={s.user_mail}>{mail}</p>;
}

UserInfo.propTypes = {
  mail: PropTypes.string,
};
