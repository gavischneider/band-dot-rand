import React from "react";
import { RelatedArtist } from "./RelatedArtist"

export const ArtistsRelatedArtists = (props: any) => {
  console.log("PROPS");
  console.log(props);
  const artists = props.artists;
  return (
    <div className="container mx-auto">
        artists.map((artist) => {
            
        })
    </div>
  );
};
