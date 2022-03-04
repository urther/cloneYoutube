import React from "react";

const VideoItem = ({ video, video: { snippet }, onVideoClick }) => (
  <li onClick={() => onVideoClick(video)}>
    <img src={snippet.thumbnails.medium.url} alt={snippet.title} />
    <div>
      <p>{snippet.title}</p>
      <p>{snippet.channelTitle}</p>
    </div>
  </li>
);

export default VideoItem;
