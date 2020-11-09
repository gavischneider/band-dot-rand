import React, { useEffect, useState } from "react";
import axios from "axios";

export const RandomSong = () => {
  const [initialState, setInitialState] = useState([]);

  const proxyUrl = "http://localhost:3001";
  const api = "/random";

  useEffect(() => {
    axios.get(proxyUrl + api).then((res) => {
      console.log("Res: ");
      console.log(res);
      console.log("res.data: ");
      console.log(res.data);
      setInitialState([
        {
          ...res.data,
        },
      ]);
    });
  }, []);

  console.log("initialState: ");
  console.log(initialState);
  return <h1>Hey</h1>;
};
