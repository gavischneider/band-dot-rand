import React, { useEffect, useState } from "react";
import axios from "axios";

export const Album = (props: any) => {
  const [image, setImage] = useState<string>("");

  // Backend API
  const proxyUrl = "http://localhost:3001";
  const api = "/album/";
  const artist = props.artist;
  const album = props.album;

  console.log("----PROPS----");
  console.log(props);

  useEffect(() => {
    (async function callAPI() {
      axios
        .get(proxyUrl + api, {
          params: {
            artist: artist,
            album: album,
          },
        })
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
      <img src={image} />
    </div>
  );
};
