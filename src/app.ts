import express, { Application, Request, Response, NextFunction } from "express";
import { Browser, Page } from "puppeteer";

const puppeteer = require("puppeteer");
const bodyParser = require("body-parser");
const SpotifyWebApi = require("spotify-web-api-node");
const fetch = require("node-fetch");

// ---------- Musixmatch API ----------------------------
const APIKey = "5a6a3319d10b8dd4593f110d6db57172";
const randomSong: any = require("@chatandshare/random-song");
const music: any = require("musicmatch")({
  apikey: APIKey,
});
// -----------------------------------------------------

// ---------- Spotify API ------------------------------
var spotifyApi = new SpotifyWebApi({
  clientId: "d14b9d690e8d4fcb907908dbb94e4382",
  clientSecret: "8ac0c6de263b46f9b3e7e406bfdb818c",
});

// Retrieve an access token.
spotifyApi.clientCredentialsGrant().then(
  function (data: any) {
    console.log("The access token expires in " + data.body["expires_in"]);
    console.log("The access token is " + data.body["access_token"]);

    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body["access_token"]);
  },
  function (err: Error) {
    console.log("Something went wrong when retrieving an access token", err);
  }
);

// -----------------------------------------------------

require("dotenv").config();

const app: Application = express();

const random: any = new randomSong(process.env.API_KEY);

const PORT: string | number = process.env.PORT || 3001;

let ARTIST_NAME: string = "";
let ALBUM_NAMES: any = [];

let INDEX: number = 0;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Allows frontend to call backend API
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

class Album {
  album_id: any;
  album_mbid: any;
  album_name: any;
  album_rating: any;
  album_track_count: any;
  album_release_date: any;
  album_release_type: any;
  artist_id: any;
  constructor(
    album_id: number,
    album_mbid: number,
    album_name: string,
    album_rating: number,
    album_track_count: number,
    album_release_date: string,
    album_release_type: string,
    artist_id: number
  ) {
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
  artist_id: any;
  artist_name: any;
  artist_country: any;
  artist_twitter_url: any;
  artist_albums: any;
  constructor(
    artist_id: number,
    artist_name: string,
    artist_country: string,
    artist_twitter_url: string,
    artist_albums: Array<Album>
  ) {
    (this.artist_id = artist_id),
      (this.artist_name = artist_name),
      (this.artist_country = artist_country),
      (this.artist_twitter_url = artist_twitter_url),
      (this.artist_albums = new Array());
  }
}

// Home route
app.get("/", (req: Request, res: Response) => {
  res.send(
    "Welcome to bandDotRand! To get a random song, go to the '/random' route."
  );
});

// Random band route
app.get("/random", async (req: Request, res: Response) => {
  // Get a random query prefix
  let rand = (function getRandomSearch() {
    // A list of all characters that can be chosen.
    const characters = "abcdefghijklmnopqrstuvwxyz";

    // Gets a random character from the characters string.
    const randomCharacter = characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
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
  spotifyApi.searchArtists(rand).then(
    function (data: any) {
      console.log("Search artists by random query", data.body);

      console.log("// ---------- Artist data: ----------");
      console.log(data.body.artists.items);

      // Choose one of the artist results randomly
      const randomArtist =
        data.body.artists.items[
          Math.floor(Math.random() * data.body.artists.items.length)
        ];

      console.log("---------- HERE IS THE RANDOM ARTIST ----------");
      console.log(randomArtist);
      //res.send(randomArtist);

      // Get the artists albums
      spotifyApi.getArtistAlbums(randomArtist.id).then(
        function (data: any) {
          console.log("Artist albums", data.body);
          const albums: any = data.body.items;

          // Combine the random artist with its albums and send
          let finalArtist = {
            ...randomArtist,
            albums,
          };
          console.log("---------- HERE IS THE *FINAL* ARTIST ----------");
          console.log(finalArtist);
          res.send(finalArtist);
        },
        function (err: Error) {
          console.error(err);
        }
      );
    },
    function (err: Error) {
      console.error(err);
    }
  );
});

// Get an album cover art
app.get("/album", async (req: Request, res: Response) => {
  console.log("ALBUM ROUTE=============");
  // Get albums by a certain artist
  spotifyApi.getArtistAlbums("43ZHCT0cAZBISjO8DG9PnE").then(
    function (data: any) {
      console.log("Artist albums", data.body);
    },
    function (err: Error) {
      console.error(err);
    }
  );
});

app.listen(PORT, () => console.log("Server running on port 3001"));
