import styles from '../styles/Miniplayer.module.css';
import { useRef, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import { useLocation } from 'react-router-dom';

const Miniplayer = ({videoID}) => {
     const buttonRef = useRef();
     const[status, setStatus] = useState(false);
     const videoUrl = `https://www.youtube.com/watch?v=${videoID}`;
     const location = useLocation();
     const { state } = location;

     function toogleMiniplayer(){
          if(!status){
               buttonRef.current.classList.remove(styles.floatingBtn);
               setStatus(true);
          }else{
               buttonRef.current.classList.add(styles.floatingBtn);
               setStatus(false);
          }
     }
     return (
          <div className={`${styles.miniPlayer} ${styles.floatingBtn}`} ref={buttonRef} onClick={toogleMiniplayer} >
               <span className={`material-icons-outlined ${styles.open}`}> play_circle_filled </span>
               <span className={`material-icons-outlined ${styles.close}`} onClick={toogleMiniplayer}> close </span>
               <ReactPlayer url={videoUrl} width={'300px'} height={'168px'} playing={status} controls={true} className={styles.player}/>
               <p>{state.title}</p>
          </div>
     );
};

export default Miniplayer;