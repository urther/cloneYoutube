import React from "react";

const VideoDetail = ({ video }) => {
  return (
    <section>
      <iframe
        id="ytplayer"
        title={video.snippet.title}
        type="text/html"
        width="720"
        height="405"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h2>{video.snippet.title}</h2>
      <h3>{video.snippet.channelTitle}</h3>
      <pre>{video.snippet.description}</pre>
    </section>
  );
};

export default VideoDetail;
