import React from "react";

const VideoDetail = ({ video }) => {
  return (
    <section className="detail">
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
      <h2 className="detail--title">{video.snippet.title}</h2>
      <h3 className="detail--channel">{video.snippet.channelTitle}</h3>
      <pre className="detail--des">{video.snippet.description}</pre>
    </section>
  );
};

export default VideoDetail;
