import { __awaiter } from "tslib";
const express = require("express");
const router = express.Router();
const SpotifyWebApi = require("spotify-web-api-node");
// ---------- Spotify API ----------------------------------------
var spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
});
// Retrieve an access token.
function getToken() {
    spotifyApi.clientCredentialsGrant().then(function (data) {
        console.log("The access token expires in " + data.body["expires_in"]);
        console.log("The access token is " + data.body["access_token"]);
        // Save the access token so that it's used in future calls
        spotifyApi.setAccessToken(data.body["access_token"]);
    }, function (err) {
        console.log("Something went wrong when retrieving an access token", err);
    });
}
getToken();
setInterval(getToken, 60 * 60 * 1000);
// ---------------------------------------------------------------
// Allows frontend to call backend API
router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
// Random band route
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Get a random query prefix
    let rand = (function getRandomSearch() {
        // A list of all characters that can be chosen.
        const characters = "abcdefghijklmnopqrstuvwxyz123456789";
        // Gets a random character from the characters string.
        const randomCharacter = characters.charAt(Math.floor(Math.random() * characters.length));
        let randomSearch = "";
        // Places the wildcard character at the beginning, or both beginning and end, randomly.
        switch (Math.round(Math.random())) {
            case 0:
                randomSearch = randomCharacter + "%";
                break;
            case 1:
                randomSearch = "%" + randomCharacter + "%";
                break;
        }
        return randomSearch;
    })();
    const randomOffset = Math.floor(Math.random() * 10000);
    // Search artists whose name starts with the random query prefix
    spotifyApi.searchArtists(rand).then(function (data) {
        console.log("Search artists by random query", data.body);
        // Choose one of the artist results randomly
        const randomArtist = data.body.artists.items[Math.floor(Math.random() * data.body.artists.items.length)];
        // Get the artists albums
        spotifyApi.getArtistAlbums(randomArtist.id).then(function (data) {
            let albums = data.body.items;
            // Sort the albums by date
            albums.sort(function compare(albumA, albumB) {
                const dateA = new Date(albumA.release_date);
                const dateB = new Date(albumB.release_date);
                return dateA - dateB;
            });
            albums.reverse();
            // Get artists related to an artist
            spotifyApi.getArtistRelatedArtists(randomArtist.id).then(function (data) {
                const relatedArtists = data.body.artists;
                // Combine the random artist with its albums and related artists, then send
                let finalArtist = Object.assign(Object.assign({}, randomArtist), { albums,
                    relatedArtists });
                res.send(finalArtist);
            }, function (err) {
                console.log(err);
            });
        }, function (err) {
            console.error(err);
        });
    }, function (err) {
        console.error(err);
    });
}));
module.exports = router;
