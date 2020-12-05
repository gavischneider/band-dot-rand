import React from "react";
import { Album } from "./Album";
import { Album as AlbumT } from "../types/interfaces";

export const ArtistsAlbums = (props: any) => {
  console.log("PROPS");
  console.log(props);
  const albums: AlbumT[] = props.albums;
  return (
    <div className="container mx-auto">
      <div className="object-center grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto">
        {albums.map((album: any) => {
          return <Album key={album.id} album={album} />;
        })}
      </div>
    </div>
  );
};
