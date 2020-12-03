import React, { Component } from "react";
import { RelatedArtist } from "./RelatedArtist";
import Carousel from "react-elastic-carousel";

export const ArtistsRelatedArtists = (props: any) => {
  console.log("ARTISTS RELATED ARTISTS PROPS");
  console.log(props);
  const relatedArtists = props.relatedArtists;

  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 750, itemsToShow: 3 },
    { width: 1100, itemsToShow: 5 },
  ];

  return (
    <div className="container mx-auto pt-10">
      <h1 className="pb-8">Related Artists</h1>
      <div className="{width: 1, itemsToShow: 1},">
        <Carousel breakPoints={breakpoints}>
          {relatedArtists.map((artist: any) => {
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
    </div>
  );
};
