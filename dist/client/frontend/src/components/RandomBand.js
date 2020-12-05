import { __awaiter } from "tslib";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ArtistInfo } from "./ArtistInfo";
import { ArtistsAlbums } from "./ArtistsAlbums";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ArtistsRelatedArtists } from "./ArtistsRelatedArtists";
//eslint-disable import/first
export const RandomBand = () => {
    const [initialState, setInitialState] = useState([]);
    const PORT = process.env.PORT || 3001;
    // Backend API
    const proxyUrl = `http://localhost:${PORT}`;
    const api = "/random";
    useEffect(() => {
        (function callAPI() {
            return __awaiter(this, void 0, void 0, function* () {
                axios
                    .get(proxyUrl + api)
                    .then((response) => {
                    setInitialState([
                        Object.assign({}, response.data),
                    ]);
                    console.log("RESPONSE.DATA");
                    console.log(response.data);
                })
                    .catch((error) => console.log(error));
            });
        })();
    }, [proxyUrl]);
    console.log("initialState: ");
    console.log(initialState);
    if (!initialState[0])
        return React.createElement("span", null, "loading...");
    return (React.createElement("div", { className: "bg-gray-900" },
        React.createElement(Navbar, null),
        React.createElement(ArtistInfo, { info: initialState[0] }),
        React.createElement(ArtistsAlbums, { albums: initialState[0].albums }),
        React.createElement(ArtistsRelatedArtists, { relatedArtists: initialState[0].relatedArtists }),
        React.createElement(Footer, null)));
};
