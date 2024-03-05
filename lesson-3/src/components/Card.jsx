import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ imageUrl, title, subtitle }) => {
  return (
    <div className="card">
      <img className="card-image" src={imageUrl} alt="Card image" />
      <div className="card-container">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
};

export default Card;
