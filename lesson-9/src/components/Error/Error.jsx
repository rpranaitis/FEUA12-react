import styles from './Error.module.scss';

const Error = ({ children }) => {
  return <div className={styles.errorMessage}>{children}</div>;
};

export default Error;
