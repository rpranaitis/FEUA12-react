import PropTypes from 'prop-types';
import style from './Notification.module.scss';
import classNames from 'classnames';
import { CiCircleInfo, CiCircleCheck, CiCircleAlert } from 'react-icons/ci';
import { FaXmark } from 'react-icons/fa6';

const Notification = ({ type = 'primary', onClick, children }) => {
  const getIconByType = (type) => {
    if (type === 'primary') {
      return <CiCircleInfo />;
    } else if (type === 'success') {
      return <CiCircleCheck />;
    } else if (type === 'error') {
      return <CiCircleAlert />;
    } else {
      return <CiCircleInfo />;
    }
  };

  return (
    <div className={classNames(style[type], style.notification)} onClick={onClick}>
      <div className={style.leftSide}>
        {getIconByType(type)}
        {children}
      </div>
      <div>
        <FaXmark />
      </div>
    </div>
  );
};

Notification.propTypes = {
  type: PropTypes.oneOf(['primary', 'success', 'error']),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Notification;
