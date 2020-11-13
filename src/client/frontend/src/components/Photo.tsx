import React, { useEffect, useState } from "react";
import axios from "axios";

export const Photo = () => {
  const [image, setImage] = useState<string>("");

  // Backend API
  const proxyUrl = "http://localhost:3001";
  const api = "/photo";

  useEffect(() => {
    (async function callAPI() {
      axios
        .get(proxyUrl + api)
        .then((response) => {
          setImage(response.data);
          console.log("RESPONSE.DATA");
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    })();
  }, []);

  console.log("Image (state): ");
  console.log(image);

  if (!image) return <span>loading Image...</span>;

  return <img src={image} />;
};
