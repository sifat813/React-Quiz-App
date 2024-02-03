import styles from '../styles/ProgressBar.module.css';
import Button from './Button';

// eslint-disable-next-line react/prop-types
const ProgressBar = ({ next, previous, percent, submit }) => {

     return (
          <div className={styles.progressBar}>
            <div className={styles.backButton} onClick={previous}>
              <span className="material-icons-outlined"> arrow_back </span>
            </div>
          <div className={styles.rangeArea}>
            <div className={styles.tooltip} >{percent}% Complete!</div>
            <div className={styles.rangeBody}>
              <div className={styles.progress} style={{width: percent+'%'}} title={`${percent}% Complete!`}></div>
            </div>
          </div>
            <Button className={styles.next} onClick={ percent === 100 ? submit : next}>
              <>
              <span>{percent!==100 ? 'Next Question' : 'Submit Quiz'}</span>
              <span className="material-icons-outlined"> arrow_forward </span>
              </>
            </Button>
        </div>
     );
};

export default ProgressBar;