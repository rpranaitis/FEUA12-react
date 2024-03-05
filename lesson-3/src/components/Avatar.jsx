import PropTypes from 'prop-types';
import './Avatar.css';

const Avatar = ({ name, bgColor }) => {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('');

  const avatarClasses = `avatar${bgColor ? ` ${bgColor}` : ''}`;

  return <div className={avatarClasses}>{initials}</div>;
};

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
};

export default Avatar;
