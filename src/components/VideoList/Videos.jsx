import React from "react";
import VideoItem from "../VideoItem/VideoItem";

const Videos = ({ videos }) => {
  return (
    <ul>
      {videos.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </ul>
  );
};

export default Videos;
