import React from "react";
import { Album } from "./Album";
export const ArtistsAlbums = (props) => {
    const albums = props.albums;
    return (React.createElement("div", { className: "container mx-auto" },
        React.createElement("div", { className: "object-center grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto" }, albums.map((album) => {
            return React.createElement(Album, { key: album.id, album: album });
        }))));
};
