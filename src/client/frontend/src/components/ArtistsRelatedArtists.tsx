import React from "react";
import { RelatedArtist } from "./RelatedArtist";

export const ArtistsRelatedArtists = (props: any) => {
  console.log("ARTISTS RELATED ARTISTS PROPS");
  console.log(props);
  const relatedArtists = props.relatedArtists;
  return (
    <div className="container mx-auto">
      <div className="object-center grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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
      </div>
    </div>
  );
};
