import express, { Application, Request, Response, NextFunction } from "express";
import { Browser, Page } from "puppeteer";

const puppeteer = require("puppeteer");
const SpotifyWebApi = require("spotify-web-api-node");

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

const PORT: string | number = process.env.PORT || 3001;

// Allows frontend to call backend API
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

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

app.listen(PORT, () => console.log("Server running on port 3001"));
