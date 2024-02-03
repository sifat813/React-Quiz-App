import css from '../styles/Form.module.css'
// eslint-disable-next-line react/prop-types
const Form = ({children, className, ...rest}) => {
     return (
          <form className={`${className} ${css.form}`} action="#" {...rest}>
               {children}
          </form>
     );
};

export default Form;