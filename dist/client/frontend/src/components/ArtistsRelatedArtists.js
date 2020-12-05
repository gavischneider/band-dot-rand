import React from "react";
import { RelatedArtist } from "./RelatedArtist";
import Carousel from "react-elastic-carousel";
export const ArtistsRelatedArtists = (props) => {
    console.log("ARTISTS RELATED ARTISTS PROPS");
    console.log(props);
    const relatedArtists = props.relatedArtists;
    const breakpoints = [
        { width: 1, itemsToShow: 1 },
        { width: 500, itemsToShow: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 750, itemsToShow: 4 },
        { width: 1100, itemsToShow: 5 },
    ];
    return (React.createElement("div", { className: "container mx-auto pt-10" },
        React.createElement("h1", { className: "mb-10 mt-8 text-2xl text-white" }, "Related Artists"),
        React.createElement(Carousel, { breakPoints: breakpoints, className: "p-5" }, relatedArtists.map((artist) => {
            return (React.createElement(RelatedArtist, { key: artist.id, name: artist.name, images: artist.images, url: artist.external_urls.spotify }));
        }))));
};
