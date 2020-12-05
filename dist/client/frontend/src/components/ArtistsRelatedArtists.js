"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistsRelatedArtists = void 0;
const react_1 = __importDefault(require("react"));
const RelatedArtist_1 = require("./RelatedArtist");
const react_elastic_carousel_1 = __importDefault(require("react-elastic-carousel"));
exports.ArtistsRelatedArtists = (props) => {
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
    return (react_1.default.createElement("div", { className: "container mx-auto pt-10" },
        react_1.default.createElement("h1", { className: "mb-10 mt-8 text-2xl text-white" }, "Related Artists"),
        react_1.default.createElement(react_elastic_carousel_1.default, { breakPoints: breakpoints, className: "p-5" }, relatedArtists.map((artist) => {
            return (react_1.default.createElement(RelatedArtist_1.RelatedArtist, { key: artist.id, name: artist.name, images: artist.images, url: artist.external_urls.spotify }));
        }))));
};