import express, { Application, Request, Response } from "express";

const randomSong: any = require("@chatandshare/random-song");
const music: any = require("musicmatch")({ apikey: process.env.API_KEY });

require("dotenv").config();

const app: Application = express();

const random: any = new randomSong(process.env.API_KEY);

const PORT: string | number = process.env.PORT || 3001;

// Allows frontend to call backend API
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// Home route
app.get("/", (req: Request, res: Response) => {
  res.send(
    "Welcome to bandDotRand! To get a random song, go to the '/random' route."
  );
});

// Random song route
app.get("/random", async (req: Request, res: Response) => {
  try {
    // Get random song
    const song = await random.song();
    console.log(song);
    res.send(song);

    // Get the artists ID from the song
    const artistID = song.artist_id;
    console.log("ArtistID: " + artistID);

    // Get the songs artist
    music
      .artist({ artist_id: artistID })
      .then(function (data: any) {
        console.log(data.message);
        //res.send(data);
      })
      .catch(function (err: any) {
        console.log("ERROR: " + err);
      });
  } catch (error) {
    console.log(error);
  }
});
app.listen(PORT, () => console.log("Server running on port 3001"));
