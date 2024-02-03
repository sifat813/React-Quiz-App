import Miniplayer from "../Miniplayer";
import ProgressBar from "../ProgressBar";
import useQuestions from "../../hooks/useQuestions";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";
import _ from "lodash";
import Answers from "../Answers";
import useAuth from "../../hooks/useAuth";
import { getDatabase, ref, set } from "firebase/database";

const initialState = null;

const reducer = (state, action) => {
     switch(action.type){
          case "questions":
               action.value.forEach((question) => {
                    question.options.forEach((option)=>{
                         option.checked=false;
                    })
               })
               return action.value;
          case "answer":
                    // eslint-disable-next-line no-case-declarations
                    const questions = _.cloneDeep(state);
                    questions[action.questionID].options[action.optionIndex].checked = action.value;
               return questions;
          default:
               return state;
     }
}

const Quiz = () => {

     const {id} = useParams();
     const history = useNavigate();
     const { currentUser } = useAuth();
     const{loading, error, questions} =useQuestions(id);
     const [currentQuestion, setCurrentQuestion] = useState(0);

     useEffect(() => {
          dispatch({
               type: "questions",
               value: questions
          });
     },[questions]);

     function handleChange(e,index){
          e.preventDefault();
          dispatch({
               type: "answer",
               questionID: currentQuestion,
               optionIndex: index,
               value: e.target.checked
          });
     }

     function nextQuestion(){
          if(currentQuestion+1 < questions.length){
               setCurrentQuestion(currentQuestion+1);
          }
     }

     function prevQuestion(){
          if(currentQuestion >=1 && currentQuestion <= questions.length){
               setCurrentQuestion(currentQuestion-1);
          }
     }

     //submit quiz
     async function submit(){
          const{uid} = currentUser;
          const db = getDatabase();
          const resultRef = ref(db, "result/"+uid);

          await set(resultRef, {
               [id]: qna,
          })
          history(`/result/${id}`, { state:{qna:qna}});
     }

     //calculate percentage of progress bar
     const precentage = questions.length > 0 ? ((currentQuestion + 1 ) /questions.length) * 100 : 0; 

     const [qna, dispatch] = useReducer(reducer, initialState);

     return (
          <div>
               {loading && <p>Loading...</p>}
               {error && <p>There was an error!</p>}
               {!loading && !error && qna && qna.length> 0 &&
               <><h1>{qna[currentQuestion].title}</h1>
                <h4>Question can have multiple answers</h4>
                <hr />
                <Answers options={qna[currentQuestion].options} onHandleChange={handleChange} input={true}/></>}
                <Miniplayer videoID={id}/>
                <ProgressBar next={nextQuestion} previous={prevQuestion} percent={precentage} submit={submit}/>
          </div>
     );
};

export default Quiz;