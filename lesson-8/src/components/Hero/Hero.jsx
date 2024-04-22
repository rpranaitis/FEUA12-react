import PropTypes from 'prop-types';
import style from './Hero.module.scss';
import classNames from 'classnames';

const Hero = ({ type = 'primary', title, subtitle }) => {
  return (
    <div className={classNames(style[type], style.hero)}>
      <h2 className={style.title}>{title}</h2>
      {subtitle && <span className={style.subtitle}>{subtitle}</span>}
    </div>
  );
};

Hero.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default Hero;
