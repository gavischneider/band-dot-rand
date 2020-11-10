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
const randomSong = require("@chatandshare/random-song");
const music = require("musicmatch")({ apikey: process.env.API_KEY });
require("dotenv").config();
const app = express_1.default();
const random = new randomSong(process.env.API_KEY);
const PORT = process.env.PORT || 3001;
// Allows frontend to call backend API
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
// Home route
app.get("/", (req, res) => {
    res.send("Welcome to bandDotRand! To get a random song, go to the '/random' route.");
});
// Random song route
app.get("/random", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Get random song
        const song = yield random.song();
        console.log(song);
        res.send(song);
        // Get the artists ID from the song
        const artistID = song.artist_id;
        console.log("ArtistID: " + artistID);
        // Get the songs artist
        music
            .artist({ artist_id: artistID })
            .then(function (data) {
            console.log(data.message);
            //res.send(data);
        })
            .catch(function (err) {
            console.log("ERROR: " + err);
        });
    }
    catch (error) {
        console.log(error);
    }
}));
app.listen(PORT, () => console.log("Server running on port 3001"));
