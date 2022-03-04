import axios from "axios";
import { useEffect, useState } from "react";
import Videos from "./components/VideoList/Videos";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const config = {
      method: "get",
      url: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${process.env.REACT_APP_API_KEY}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setVideos(response.data.items);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return <Videos videos={videos} />;
}

export default App;
