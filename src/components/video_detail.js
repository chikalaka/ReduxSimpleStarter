import React from 'react';
import Loader from './loader';

const VideoDetail = ({video}) => {
  if (!video) {
    return <Loader />;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className='video-detail col-md-8'>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe className='details' src={url}></iframe>
      </div>
      <div className='details'>
        <div>{video.snippet.title}</div>
      <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
