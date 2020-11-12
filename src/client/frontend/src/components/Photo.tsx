import React, { useEffect, useState } from "react";
import axios from "axios";

export const Photo = () => {
  const [image, setImage] = useState<Image[]>([]);

  // Backend API
  const proxyUrl = "http://localhost:3001";
  const api = "/photo";

  interface Image {
    src: string;
  }

  useEffect(() => {
    (async function callAPI() {
      axios
        .get<Image>(proxyUrl + api)
        .then((response) => {
          setImage([
            {
              ...response.data,
            },
          ]);
          console.log("RESPONSE.DATA");
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    })();
  }, []);

  console.log("Image (state): ");
  console.log(image);

  if (image.length === 0) return <span>loading Image...</span>;

  return <img src={String(image[0])} />;
};
