import PropTypes from 'prop-types';
import style from './Button.module.scss';

const Button = ({ color = 'primary', type, onClick, children, ...rest }) => {
  return (
    <button className={style[color]} type={type} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']),
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
