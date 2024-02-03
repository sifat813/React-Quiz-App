import { useEffect, useState } from "react";
import { get, getDatabase, orderByKey, query, ref  } from "firebase/database"

const useQuestions = (videoID) => {

     const [loading, setLoading] = useState(true)
     const [error, setError] = useState(false);
     const [questions, setquestions] = useState([]);

     useEffect(() => {
          async function fetchVideos(){
               const db = getDatabase();
               const quizRef = ref(db, "quiz/"+videoID+"/questions");
               const quizQuery = query(
                    quizRef,
                    orderByKey(),
               );
               try{
                    setError(false);
                    setLoading(true);
                    //request databese firebase
                    const snapshot = await get(quizQuery);
                    setLoading(false);
                    if (snapshot.val() !== null) {
                         setquestions(() => {
                              return [...Object.values(snapshot.val())]
                         })
                    }
               }catch(err){
                    setLoading(false);
                    setError(true);
               }
          }
          fetchVideos();
     },[videoID]);

     return ({
          loading,
          error,
          questions
     });
};

export default useQuestions;