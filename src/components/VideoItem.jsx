import React from "react";

const VideoItem = ({ video, video: { snippet }, onVideoClick, display }) => {
  const displayType =
    display === "grid"
      ? {
          width: "50%",
          boxSizing: "border-box",
        }
      : {};

  return (
    <li
      className="video"
      style={displayType}
      onClick={() => onVideoClick(video)}
    >
      <img
        className="video__img"
        src={snippet.thumbnails.medium.url}
        alt={snippet.title}
      />
      <div>
        <p className="video--title">{snippet.title}</p>
        {display === "grid" ? (
          <p className="video--chanelTitle">{snippet.channelTitle}</p>
        ) : null}
      </div>
    </li>
  );
};

export default VideoItem;
