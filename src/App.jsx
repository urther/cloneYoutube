import { useEffect, useState } from "react";
import SearchHeader from "./components/SearchHeader/SearchHeader";
import Videos from "./components/VideoList/Videos";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    youtube.search(query).then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, []);

  useEffect(() => console.log(videos), [videos]);

  return (
    <div>
      <SearchHeader onSearch={search} />
      <Videos videos={videos} />;
    </div>
  );
}

export default App;
