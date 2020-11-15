import React, { useEffect, useState } from "react";
import { Album } from "./Album";
import axios from "axios";

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
