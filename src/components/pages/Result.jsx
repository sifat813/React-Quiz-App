import Summary from "../Summary";
import Analysis from "../Analysis";
import { useLocation, useParams } from "react-router-dom";
import useAnswers from "../../hooks/useAnswers";
import _ from "lodash"

const Result = () => {

     const { rid } = useParams();
     const location = useLocation();
     const { state } = location;
     const { qna } = state;
     const { loading, error, answers }  = useAnswers(rid);

     function countScore(){
          let score = 0;
          answers.forEach((questions, index1) => {
               let checkedIndexes = [];
               let correctIndexes = [];
               questions.options.forEach((option, index2) => {
                    if(option.correct){
                         correctIndexes.push(index2);
                    }
                    if(qna[index1].options[index2].checked){
                         checkedIndexes.push(index2);
                         option.checked= true;
                    }
               });
               if(_.isEqual(correctIndexes, checkedIndexes)){
                    score+=5;
               }
          });
          return score;
     }

     const userScore = countScore();

     return (
          <>   {loading && <div>Loading...</div>}
               {error && <div>There was an error!</div>}
               {answers && answers.length> 0  &&
               <><Summary score={userScore} noq={answers.length}/>
               <Analysis answers={answers}/></>}
          </>
     );
};

export default Result;

//react 41; 9:00