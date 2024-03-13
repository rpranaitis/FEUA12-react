import PropTypes from "prop-types";
import styles from "./Product.module.css";
import { Button } from "../index";

const Product = ({ item, onDelete }) => {
    return (
        <div className={styles.product}>
            <div className={styles.image}>
                <img src={[item.image]} alt={item.title} />
            </div>
            <span className={styles.title}>{item.title}</span>
            <span className={styles.price}>&euro;{item.price}</span>
            <Button onClick={onDelete}>Ištrinti</Button>
        </div>
    );
};

Product.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }),
    onDelete: PropTypes.func.isRequired,
};

export default Product;
