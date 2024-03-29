import styles from '../styles/Question.module.css';
import Answers from './Answers';

const Question = ({answers=[]}) => {
     return answers.map((answer, index) => {
      return(<div className={styles.question} key={index}>
      <div className={styles.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        {answer.title}
      </div>
      <Answers  options={answer.options} input={false}/>
    </div>)
     });
};

export default Question;