import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ children, ...props }) => {
    return <button {...props}>{children}</button>;
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Button;
