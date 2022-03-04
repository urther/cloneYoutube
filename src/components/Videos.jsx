import React from "react";
import VideoItem from "./VideoItem";

const Videos = ({ videos, onVideoClick, display }) => {
  return (
    <ul className="videos">
      {videos.map((video) => (
        <VideoItem
          key={video.id}
          video={video}
          onVideoClick={onVideoClick}
          display={display}
        />
      ))}
    </ul>
  );
};

export default Videos;
