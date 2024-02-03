import { Fragment } from 'react';
import styles from '../styles/Answers.module.css'
import Checkbox from './Checkbox';

// eslint-disable-next-line react/prop-types
const Answers = ({options=[], onHandleChange, input }) => {
     return (
          <div className={styles.answers}>
               {options.map((option, index) => {
                    return <Fragment key={index}>
                         {input ? (
                              <Checkbox text={option.title} checked={option.checked} value={index} className={styles.answer} onChange={(e) => {onHandleChange(e,index)}}></Checkbox>
                         ) : (
                              <Checkbox text={option.title} defaultChecked={option.checked} className={`${styles.answer} ${
                                   option.correct ? styles.correct : option.checked ? styles.wrong : null
                              }`}></Checkbox>
                         )}
                    </Fragment>
               })}
          </div>
     );
};

export default Answers;

// lws react 41; 28:00