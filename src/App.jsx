import { useCallback, useEffect, useState } from "react";
import SearchHeader from "./components/SearchHeader";
import VideoDetail from "./components/VideoDetail";
import Videos from "./components/Videos";
import "./sass/_index.scss";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = useCallback(
    (query) => {
      youtube.search(query).then((videos) => {
        setVideos(videos);
        setSelectedVideo(null);
      });
    },
    [youtube]
  );

  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <div className="app">
      <SearchHeader onSearch={search} />
      <section className="content">
        {selectedVideo ? (
          <div className="detail">
            <VideoDetail video={selectedVideo} />
          </div>
        ) : null}
        <div className="list">
          <Videos
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo !== null ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
