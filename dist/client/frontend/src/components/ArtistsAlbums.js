"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistsAlbums = void 0;
const react_1 = __importDefault(require("react"));
const Album_1 = require("./Album");
exports.ArtistsAlbums = (props) => {
    console.log("PROPS");
    console.log(props);
    const albums = props.albums;
    return (react_1.default.createElement("div", { className: "container mx-auto" },
        react_1.default.createElement("div", { className: "object-center grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto" }, albums.map((album) => {
            return react_1.default.createElement(Album_1.Album, { key: album.id, album: album });
        }))));
};
