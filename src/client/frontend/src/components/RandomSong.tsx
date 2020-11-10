import React, { useEffect, useState } from "react";
import axios from "axios";

export const RandomSong = () => {
  const [initialState, setInitialState] = useState<ServerData[]>([]);

  const proxyUrl = "http://localhost:3001";
  const api = "/random";

  interface ServerData {
    randomSong: object;
  }

  useEffect(() => {
    axios
      .get<ServerData>(proxyUrl + api)
      .then((response) => {
        setInitialState([
          {
            ...response.data,
          },
        ]);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log("initialState: ");
  console.log(initialState);
  return <h1>Hey</h1>;
};
