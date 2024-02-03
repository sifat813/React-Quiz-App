import styles from '../styles/Textinput.module.css'

// eslint-disable-next-line react/prop-types
const Textinput = ({icon, type, placeholder, onChange }) => {
     return (
          <div className={styles.textInput}>
          <input type={type} placeholder={placeholder} onChange={onChange}/>
          <span className="material-icons-outlined"> {icon} </span>
        </div>
     );
};

export default Textinput;