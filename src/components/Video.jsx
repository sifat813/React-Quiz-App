import styles from '../styles/Video.module.css';

// eslint-disable-next-line react/prop-types
const Video = ({title, noq, id}) => {
     return (
          <div className={styles.video}>
            <img src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt={title}/>
            <p>{title}</p>
            <div className={styles.qmeta}>
              <p>{noq} Questions</p>
              <p>Total points : {noq * 5}</p>
            </div>
          </div>
     );
};

export default Video;