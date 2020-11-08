import React, { useEffect, useState } from "react";

export const Hello = () => {
  const [initialState, setInitialState] = useState([]);

  useEffect(() => {
    fetch("/random")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonResponse) => setInitialState(jsonResponse));
  }, []);

  console.log(initialState);
  return <div>Hey</div>;
};
