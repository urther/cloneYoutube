import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const config = {
      method: "get",
      url: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=${process.env.REACT_APP_API_KEY}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        // console.log(response.data.items);
        setVideos(response.data.items);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return <div className="App"></div>;
}

export default App;
