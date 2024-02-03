/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import succesImage from '../assets/success.png';
import styles from '../styles/Summary.module.css';
import { createClient } from "pexels";

const Summary = ({score, noq}) => {
  const [result, setResult] = useState(null);

  const getKeyword = () => {
    if(( score /( noq * 5 )) * 100 < 50){
      return "failed";
    }else if(( score /( noq * 5 )) * 100 < 75){
      return "good";
    }else if(( score /( noq * 5 )) * 100 < 100){
      return "very good";
    }else if(( score /( noq * 5 )) * 100 == 75){
      return "like";
    }}

  useEffect(() => {
    const client = createClient('rqcvCZCrCg5XsVE5Fy6EDR48VNpUKKaTQRGsMPS2lE9q7Uc64yB9HJv5');
    const query = getKeyword();
    client.photos.search({ query, per_page: 1 }).then(res => {setResult(res)});
  },[])
  const image = result ? result.photos[0].src.medium : succesImage;

     return (
        <div className={styles.summary}>
           <div className={styles.point}>
             <p className={styles.score}>
              Your score is <br />
              {score} out of {noq * 5}!
             </p>
           </div>
            <div className={styles.badge}>
             <img src={image} alt="Success" />
            </div>
        </div>
     );
};

export default Summary;