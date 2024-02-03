import Video from './Video';
import { Link } from 'react-router-dom';
import useVideoList from '../hooks/useVideoList';

const Videos = () => {
     const { videos, loading, error } = useVideoList(1);
     return (
          <div className='videos'>
               {videos.length > 0 && (
                       videos.map((video) => video.noq > 0 ? 
                       <Link to={`/quiz/${video.youtubeID}`} state={{title: video.title}} key={video.youtubeID}>
                          <Video id={video.youtubeID} noq={video.noq} title={video.title}/>
                       </Link> : 
                       <Video id={video.youtubeID} noq={video.noq} title={video.title} key={video.youtubeID}/>
               )
               )}
               {!loading && videos.length === 0 && (
                    <div>No data found</div>
               )}
               { error && (
                    <div>There was an error!</div>
               )}
               {loading && (<div>Loading...</div>)}
          </div>
     );
};

export default Videos;