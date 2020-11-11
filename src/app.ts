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

// Random band route
app.get("/random", async (req: Request, res: Response) => {
  let albums: Album[];
  let artist: Artist;
  try {
    const song = await random.song();
    console.log(song);

    // Second, extract the artists ID from the song
    const artistID = song.artist_id;
    console.log("ArtistID: " + artistID);

    // Third, get the artist's albums
    music
      .artistAlbums({
        artist_id: artistID,
        s_release_date: "desc",
        g_album_name: 1,
      })
      .then(function (data: any) {
        console.log("ALBUM_DATA: ");
        console.log(data.message.body.album_list);
        let tempAlbums = data.message.body.album_list;
        tempAlbums.forEach((album: any) => {
          const album_id = album.album_id;
          const album_mbid = album.album_mbid;
          const album_name = album.album_name;
          const album_rating = album.album_rating;
          const album_track_count = album.album_track_count;
          const album_release_date = album.album_release_date;
          const album_release_type = album.album_release_type;
          const artist_id = album.artist_id;
          let newAlbum = new Album(
            album_id,
            album_mbid,
            album_name,
            album_rating,
            album_track_count,
            album_release_date,
            album_release_type,
            artist_id
          );
          albums.push(newAlbum);
        });
      })
      .catch(function (err: any) {
        console.log(err);
      });

    // Fourth, get the actual artist
    music
      .artist({ artist_id: artistID })
      .then(function (data: any) {
        console.log("THIS IS THE ARTIST: ");
        console.log(data.message.body.artist);
        const tempArtist = data.message.body.artist;
        const artist_id = tempArtist.artist_id;
        const artist_name = tempArtist.artist_name;
        const artist_country = tempArtist.artist_country;
        const artist_twitter_url = tempArtist.artist_twitter_url;
        const artist_albums = albums;
        let newArtist = new Artist(
          artist_id,
          artist_name,
          artist_country,
          artist_twitter_url,
          artist_albums
        );
        res.json(newArtist);
      })
      .catch(function (err: any) {
        console.log("ERROR: " + err);
      });

    // Lastly, create an artist and then send it
  } catch (error) {
    console.log(error);
  }
});
app.listen(PORT, () => console.log("Server running on port 3001"));
