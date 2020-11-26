import React, { useEffect, useState } from "react";
import axios from "axios";
import { ArtistInfo } from "./ArtistInfo";
import { ArtistsAlbums } from "./ArtistsAlbums";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ArtistsRelatedArtists } from "./ArtistsRelatedArtists";

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
      <Navbar />
      <ArtistInfo info={initialState[0]} />
      <ArtistsAlbums albums={initialState[0].albums} />
      <Footer />
    </div>
  );
};
