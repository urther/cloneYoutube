import React from "react";
import VideoItem from "./VideoItem";

const Videos = ({ videos, onVideoClick }) => {
  return (
    <ul>
      {videos.map((video) => (
        <VideoItem key={video.id} video={video} onVideoClick={onVideoClick} />
      ))}
    </ul>
  );
};

export default Videos;
