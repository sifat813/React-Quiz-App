import styles from '../styles/Button.module.css'

// eslint-disable-next-line react/prop-types
const Button = ({className, children,...rest}) => {
     return (
          <button type='submit' className={`${styles.button} ${className}` } {...rest}>
              {children}
          </button>
     );
};

export default Button;