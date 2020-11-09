import express, { Application, Request, Response } from "express";

const randomSong = require("@chatandshare/random-song");

require("dotenv").config();

const app: Application = express();

const random = new randomSong(process.env.API_KEY);

const PORT = process.env.PORT || 3001;

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
    const song = await random.song();
    console.log(song);
    res.send(song);
  } catch (error) {
    console.log(error);
  }
});
app.listen(PORT, () => console.log("Server running on port 3001"));
