import styles from '../styles/Analysis.module.css';
import Question from './Question';

const Analysis = ({answers}) => {
     return (
          <div className={styles.analysis}>
          <Question answers={answers}/>
          </div>
     );
};

export default Analysis;