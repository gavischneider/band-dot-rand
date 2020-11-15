import React, { useEffect, useState } from "react";
import axios from "axios";

export const Album = () => {
  const [image, setImage] = useState<string>("");

  // Backend API
  const proxyUrl = "http://localhost:3001";
  const api = "/album/";
  //const artist = props.artist.replace(/\s+/g, "-");
  //const album = props.album;

  //console.log("----PROPS----");
  //console.log(props);

  useEffect(() => {
    (async function callAPI() {
      axios
        .get(proxyUrl + api)
        .then((response) => {
          setImage(response.data);
          console.log("ALBUM RESPONSE.DATA");
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    })();
  }, []);

  console.log("Album Image (state): ");
  console.log(image);

  if (!image) return <span>loading Album Cover...</span>;

  return (
    <div>
      <img alt={"Album Cover"} src={image} />
    </div>
  );
};

// {
//   params: {
//     artist: artist,
//     album: album,
//   },
// })
