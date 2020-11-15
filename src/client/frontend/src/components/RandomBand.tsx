import React, { useEffect, useState } from "react";
import axios from "axios";
import { Photo } from "./Photo";
import { Album } from "./Album";

export const RandomBand = () => {
  const [initialState, setInitialState] = useState<ArtistData[]>([]);

  // Backend API
  const proxyUrl = "http://localhost:3001";
  const api = "/random";

  interface Album {
    album_id: number;
    album_mbid: number;
    album_name: string;
    album_rating: number;
    album_track_count: number;
    album_release_date: string;
    album_release_type: string;
    artist_id: number;
  }

  interface ArtistData {
    id: number;
    name: string;
    external_urls: any;
    images: any;
    //artist_albums: Array<Album>;
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
      <img src={initialState[0].images[1].url} />;
      <h3>Artist Name: {initialState[0].name}</h3>
      <h3>Artist ID: {initialState[0].id}</h3>
      {initialState[0].external_urls.spotify ? (
        <h3>
          <a href={initialState[0].external_urls.spotify}>Artist Spotify URL</a>
        </h3>
      ) : (
        <h3>""</h3>
      )}
      <div></div>
    </div>
  );
};
