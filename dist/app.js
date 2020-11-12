"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const puppeteer = require("puppeteer");
//--------
const APIKey = "5a6a3319d10b8dd4593f110d6db57172";
const randomSong = require("@chatandshare/random-song");
const music = require("musicmatch")({
    apikey: APIKey,
});
require("dotenv").config();
const app = express_1.default();
const random = new randomSong(process.env.API_KEY);
const PORT = process.env.PORT || 3001;
// Allows frontend to call backend API
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
class Album {
    constructor(album_id, album_mbid, album_name, album_rating, album_track_count, album_release_date, album_release_type, artist_id) {
        (this.album_id = album_id),
            (this.album_mbid = album_mbid),
            (this.album_name = album_name),
            (this.album_rating = album_rating),
            (this.album_track_count = album_track_count),
            (this.album_release_date = album_release_date),
            (this.album_release_type = album_release_type),
            (this.artist_id = artist_id);
    }
}
class Artist {
    constructor(artist_id, artist_name, artist_country, artist_twitter_url, artist_image, artist_albums) {
        (this.artist_id = artist_id),
            (this.artist_name = artist_name),
            (this.artist_country = artist_country),
            (this.artist_twitter_url = artist_twitter_url),
            (this.artist_image = artist_image),
            (this.artist_albums = artist_albums);
    }
}
// Home route
app.get("/", (req, res) => {
    res.send("Welcome to bandDotRand! To get a random song, go to the '/random' route.");
});
// Random band route
app.get("/random", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let albums = [];
    try {
        const song = yield random.song();
        console.log(song);
        // Second, extract the artists ID from the song
        const artistID = song.artist_id;
        // Third, get the artist's albums
        music
            .artistAlbums({
            artist_id: artistID,
            s_release_date: "desc",
            g_album_name: 1,
        })
            .then(function (data) {
            let tempAlbums = data.message.body.album_list;
            tempAlbums.forEach((album) => {
                const album_id = album.album.album_id;
                const album_mbid = album.album.album_mbid;
                const album_name = album.album.album_name;
                const album_rating = album.album.album_rating;
                const album_track_count = album.album.album_track_count;
                const album_release_date = album.album.album_release_date;
                const album_release_type = album.album.album_release_type;
                const artist_id = album.album.artist_id;
                let newAlbum = new Album(album_id, album_mbid, album_name, album_rating, album_track_count, album_release_date, album_release_type, artist_id);
                albums.push(newAlbum);
            });
            console.log("----- FINAL ALBUMS READY -----");
            console.log(albums);
        })
            .catch(function (err) {
            console.log(err);
        });
        // Fourth, get the actual artist
        music
            .artist({ artist_id: artistID })
            .then(function (data) {
            const artist = data.message.body.artist;
            const artist_id = artist.artist_id;
            const artist_name = artist.artist_name;
            const artist_country = artist.artist_country;
            const artist_twitter_url = artist.artist_twitter_url;
            const artist_albums = albums;
            // Also get the artist's profile pic from the scraper
            const artist_image = (function getImage() {
                return __awaiter(this, void 0, void 0, function* () {
                    //const image = await scrapeArtistPage("https://www.musixmatch.com/artist/" + artist_name);
                    const browser = yield puppeteer.launch();
                    const page = yield browser.newPage();
                    yield page.goto("https://www.musixmatch.com/artist/" + artist_name);
                    // Get artist profile pic
                    const [photo] = yield page.$x('//*[@id="content"]/div/div[1]/div/div[3]/div/div[1]/img');
                    const src = yield photo.getProperty("src");
                    const srcTxt = yield src.jsonValue();
                    console.log(srcTxt);
                    browser.close();
                    return srcTxt;
                    //return image;
                });
            })();
            let newArtist = new Artist(artist_id, artist_name, artist_country, artist_twitter_url, artist_image, artist_albums);
            console.log("----- FINAL ARTIST READY -----");
            console.log(newArtist);
            res.send(newArtist);
        })
            .catch(function (err) {
            console.log("ERROR: " + err);
        });
        // Lastly, create an artist and then send it
    }
    catch (error) {
        console.log(error);
    }
}));
app.listen(PORT, () => console.log("Server running on port 3001"));
