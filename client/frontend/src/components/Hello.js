import React, { useEffect, useState } from "react";
import axios from "axios";

export const Hello = () => {
  const [initialState, setInitialState] = useState([]);

  const proxyUrl = "https://localhost:3001";
  const api = "/random";

  useEffect(() => {
    axios.get("http://localhost:3001/random").then((res) => {
      console.log("Res: ");
      console.log(res);
      console.log("res.data: ");
      console.log(res.data);
    });
  });

  console.log(initialState);
  return <div>Hey</div>;
};
