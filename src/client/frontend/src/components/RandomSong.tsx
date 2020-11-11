import React, { useEffect, useState } from "react";
import axios from "axios";
import { response } from "express";

export const RandomSong = () => {
  const [initialState, setInitialState] = useState<ArtistData[]>([]);

  const proxyUrl = "http://localhost:3001";
  const api = "/random";

  interface ArtistData {
    artist_id: number;
    artist_name: string;
    artist_country: string;
    artist_twitter_url: string;
  }

  useEffect(() => {
    (async function callAPI() {
      axios
        .get<ArtistData>(proxyUrl + api)
        .then((response) => {
          setInitialState([
            {
              ...response.data,
            },
          ]);
        })
        .catch((error) => console.log(error));
    })();
  }, []);

  console.log("initialState: ");
  console.log(initialState);

  console.log("initialState[0]: ");
  console.log(initialState[0]);

  if (!initialState[0]) return <span>loading...</span>;

  return (
    <div>
      <h1>Artist Info:</h1>
      <h3>Artist Name: {initialState[0].artist_name}</h3>
      <h3>Artist ID: {initialState[0].artist_id}</h3>
      {initialState[0].artist_country ? (
        <h3>Artist Country: {initialState[0].artist_country}</h3>
      ) : (
        <h3></h3>
      )}
      {initialState[0].artist_twitter_url ? (
        <h3>Artist Twitter URL: {initialState[0].artist_twitter_url}</h3>
      ) : (
        <h3></h3>
      )}
    </div>
  );
};
