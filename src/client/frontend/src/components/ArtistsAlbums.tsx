import React from "react";
import { Album } from "./Album";

export const ArtistsAlbums = (props: any) => {
  console.log("PROPS");
  console.log(props);
  const albums = props.albums;
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-5 gap-4">
        {albums.map((album: any) => {
          return <Album key={album.id} album={album} />;
        })}
      </div>
    </div>
  );
};
