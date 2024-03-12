import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ children, bgColor = "#ededed", onClick }) => {
    return (
        <button
            className={styles.button}
            style={{ backgroundColor: bgColor }}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    bgColor: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export default Button;
