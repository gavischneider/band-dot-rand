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
    artist_id: number;
    artist_name: string;
    artist_country: string;
    artist_twitter_url: string;
    artist_albums: Array<Album>;
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

  console.log("initialState[0]: ");
  console.log(initialState[0]);

  //console.log("initialState[0].artist_albums: ");
  //console.log(initialState[0].artist_albums);

  if (!initialState[0]) return <span>loading...</span>;

  return (
    <div>
      <h1>Artist Info:</h1>
      <Photo />
      <h3>Artist Name: {initialState[0].artist_name}</h3>
      <h3>Artist ID: {initialState[0].artist_id}</h3>
      {initialState[0].artist_country ? (
        <h3>Artist Country: {initialState[0].artist_country}</h3>
      ) : (
        <h3>""</h3>
      )}
      {initialState[0].artist_twitter_url ? (
        <h3>Artist Twitter URL: {initialState[0].artist_twitter_url}</h3>
      ) : (
        <h3>""</h3>
      )}
      <div>
        {initialState[0].artist_albums.map((album) => {
          <div>
            <Album
              key={album.album_id}
              artist={initialState[0].artist_name}
              album={album.album_name}
            />
          </div>;
        })}
      </div>
    </div>
  );
};
