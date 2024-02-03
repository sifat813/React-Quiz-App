import { useEffect, useState } from "react";
import { get, getDatabase, orderByKey, query, ref  } from "firebase/database"

const useAnswers = (videoID) => {

     const [loading, setLoading] = useState(true)
     const [error, setError] = useState(false);
     const [answers, setAnswers] = useState([]);

     useEffect(() => {
          async function fetchAnswers(){
               const db = getDatabase();
               const answerRef = ref(db, "answers/"+videoID+"/questions");
               const answerQuery = query(
                    answerRef,
                    orderByKey(),
               );
               try{
                    setError(false);
                    setLoading(true);
                    //request databese firebase
                    const snapshot = await get(answerQuery);
                    setLoading(false);
                    if (snapshot.val() !== null) {
                         setAnswers(() => {
                              return [...Object.values(snapshot.val())]
                         })
                    }
               }catch(err){
                    setLoading(false);
                    setError(true);
               }
          }
          fetchAnswers();
     },[videoID]);

     return ({
          loading,
          error,
          answers
     });
};

export default useAnswers;