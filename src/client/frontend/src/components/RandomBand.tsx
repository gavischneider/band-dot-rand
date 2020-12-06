import React, { useEffect, useState } from "react";
import axios from "axios";
import { ArtistInfo } from "./ArtistInfo";
import { ArtistsAlbums } from "./ArtistsAlbums";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ArtistsRelatedArtists } from "./ArtistsRelatedArtists";
import { Artist } from "../types/interfaces";

//eslint-disable import/first

export const RandomBand = () => {
  const [initialState, setInitialState] = useState<Artist[]>([]);
  const PORT: number = 3001;

  // Backend API | Change to localhost in dev environment
  const proxyUrl = `http://localhost:${PORT}`;
  //const proxyUrl = "https://band-dot-rand.herokuapp.com";
  const api = "/random";

  console.log(`PROXY URL IS: ${proxyUrl}`);

  useEffect(() => {
    (async function callAPI() {
      axios
        .get<Artist>(proxyUrl + api)
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

    let twitterButton = document.getElementById("twitter-widget-0");
    if (twitterButton) {
      twitterButton.classList.add("mx-auto");
    }
  }, [proxyUrl]);

  console.log("initialState: ");
  console.log(initialState);

  if (!initialState[0]) return <span>loading...</span>;

  return (
    <div className="bg-gray-900">
      <Navbar />
      <ArtistInfo info={initialState[0]} />
      <ArtistsAlbums albums={initialState[0].albums} />
      <ArtistsRelatedArtists relatedArtists={initialState[0].relatedArtists} />
      <Footer />
    </div>
  );
};
