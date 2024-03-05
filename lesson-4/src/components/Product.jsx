import PropTypes from 'prop-types';
import './Product.css';

const Product = ({ category, name, price }) => {
  return (
    <div className="product">
      <span className="category">{category}</span>
      <span className="title">{name}</span>
      <span>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
      </span>
      <span className="price">{price}</span>
    </div>
  );
};

Product.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Product;
