import express, { Application, Request, Response } from "express";

const APIKey = "5a6a3319d10b8dd4593f110d6db57172";
const randomSong: any = require("@chatandshare/random-song");
const music: any = require("musicmatch")({
  apikey: APIKey,
});

require("dotenv").config();

const app: Application = express();

const random: any = new randomSong(process.env.API_KEY);

const PORT: string | number = process.env.PORT || 3001;

// Allows frontend to call backend API
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

class Album {
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
    (album_id = album_id),
      (album_mbid = album_mbid),
      (album_name = album_name),
      (album_rating = album_rating),
      (album_track_count = album_track_count),
      (album_release_date = album_release_date),
      (album_release_type = album_release_type),
      (artist_id = artist_id);
  }
}

class Artist {
  constructor(
    artist_id: number,
    artist_name: string,
    artist_country: string,
    artist_twitter_url: string,
    artist_albums: Array<Album>
  ) {
    (artist_id = artist_id),
      (artist_name = artist_name),
      (artist_country = artist_country),
      (artist_twitter_url = artist_twitter_url),
      (artist_albums = artist_albums);
  }
}

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

    // Second, extract the artists ID from the song
    const artistID = song.artist_id;
    console.log("ArtistID: " + artistID);

    // Third, take the random song and get its artist
    music
      .artist({ artist_id: artistID })
      .then(function (data: any) {
        console.log(data.message.body.artist);
        res.send(data.message.body.artist);
      })
      .catch(function (err: any) {
        console.log("ERROR: " + err);
      });

    // Fourth, get the artist's albums
    music
      .artistAlbums({
        artist_id: artistID,
        s_release_date: "desc",
        g_album_name: 1,
      })
      .then(function (data: any) {
        console.log(data);
      })
      .catch(function (err: any) {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
});
app.listen(PORT, () => console.log("Server running on port 3001"));
