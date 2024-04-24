import PropTypes from 'prop-types';
import style from './Button.module.scss';
import classNames from 'classnames';

const Button = ({ color = 'primary', children, ...props }) => {
  return (
    <button className={classNames(style.button, style[color])} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.node.isRequired,
};

export default Button;
