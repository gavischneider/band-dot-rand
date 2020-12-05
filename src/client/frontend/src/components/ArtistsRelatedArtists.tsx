import React from "react";
import { RelatedArtist } from "./RelatedArtist";
import Carousel from "react-elastic-carousel";
import { Artist } from "../types/interfaces";

export const ArtistsRelatedArtists = (props: any) => {
  console.log("ARTISTS RELATED ARTISTS PROPS");
  console.log(props);
  const relatedArtists: Artist[] = props.relatedArtists;

  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 750, itemsToShow: 4 },
    { width: 1100, itemsToShow: 5 },
  ];

  return (
    <div className="container mx-auto pt-10">
      <h1 className="mb-10 mt-8 text-2xl text-white">Related Artists</h1>

      <Carousel breakPoints={breakpoints} className="p-5">
        {relatedArtists.map((artist: Artist) => {
          return (
            <RelatedArtist
              key={artist.id}
              name={artist.name}
              images={artist.images}
              url={artist.external_urls.spotify}
            />
          );
        })}
      </Carousel>
    </div>
  );
};
