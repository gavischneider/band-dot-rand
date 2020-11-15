import React from "react";
import { Album } from "./Album";

export const ArtistsAlbums = (props: any) => {
  console.log("PROPS");
  console.log(props);
  const albums = props.albums;
  return (
    <div>
      {albums.map((album: any) => {
        return <Album key={album.id} album={album} />;
      })}
    </div>
  );
};
