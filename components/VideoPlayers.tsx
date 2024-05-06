'use client'

import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url }: {url: any}) => {
  return (
    <div>
      <ReactPlayer
        url={url}
        controls={true}
      />
    </div>
  );
};

export default VideoPlayer;