import React from "react";
import { Album } from "./Album";

export const ArtistsAlbums = (props: any) => {
  console.log("PROPS");
  console.log(props);
  const albums = props.albums;
  return (
    <div className="container mx-auto">
      <div className="object-center grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {albums.map((album: any) => {
          return <Album key={album.id} album={album} />;
        })}
      </div>
    </div>
  );
};
