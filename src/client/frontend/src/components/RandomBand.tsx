import React, { useEffect, useState } from "react";
import axios from "axios";
import { ArtistsAlbums } from "./ArtistsAlbums";

export const RandomBand = () => {
  const [initialState, setInitialState] = useState<ArtistData[]>([]);

  // Backend API
  const proxyUrl = "http://localhost:3001";
  const api = "/random";

  interface ArtistData {
    id: number;
    name: string;
    external_urls: any;
    images: any;
    albums: [];
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
          console.log("RESPONSE.DATA");
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    })();
  }, []);

  console.log("initialState: ");
  console.log(initialState);

  if (!initialState[0]) return <span>loading...</span>;

  return (
    <div>
      <h1>Artist Info:</h1>
      <img src={initialState[0].images[1].url} />
      <h3>Artist Name: {initialState[0].name}</h3>
      <h3>Artist ID: {initialState[0].id}</h3>
      {initialState[0].external_urls.spotify ? (
        <h3>
          <a href={initialState[0].external_urls.spotify}>Artist Spotify URL</a>
        </h3>
      ) : (
        <h3>""</h3>
      )}
      <ArtistsAlbums albums={initialState[0].albums} />
    </div>
  );
};
