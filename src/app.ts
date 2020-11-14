import express, { Application, Request, Response, NextFunction } from "express";
import { Browser, Page } from "puppeteer";

const puppeteer = require("puppeteer");
const bodyParser = require("body-parser");

const APIKey = "5a6a3319d10b8dd4593f110d6db57172";
const randomSong: any = require("@chatandshare/random-song");
const music: any = require("musicmatch")({
  apikey: APIKey,
});

require("dotenv").config();

const app: Application = express();

const random: any = new randomSong(process.env.API_KEY);

const PORT: string | number = process.env.PORT || 3001;

let ARTIST_NAME: string = "";
let ALBUMS: any = [];
let ALBUM_NAMES: any = [];

let INDEX: number = 0;
let ALBUMS_LENGTH: number;

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
  INDEX = 0;
  let albums: Album[] = [];
  try {
    const song = await random.song();
    console.log(song);

    // Second, extract the artists ID from the song
    const artistID = song.artist_id;
    ARTIST_NAME = song.artist_name;

    // Third, get the artist's albums
    music
      .artistAlbums({
        artist_id: artistID,
        s_release_date: "desc",
        g_album_name: 1,
      })
      .then(function (data: any) {
        let tempAlbums = data.message.body.album_list;

        // ---------------------
        ALBUMS_LENGTH = tempAlbums.length;
        // ---------------------

        //console.log("----LIST OF ALBUMS BEFORE I CHANGE ANYTHING----");
        //console.log(tempAlbums);

        tempAlbums.forEach((album: any) => {
          const album_id = album.album.album_id;
          const album_mbid = album.album.album_mbid;
          const album_name = album.album.album_name;
          const album_rating = album.album.album_rating;
          const album_track_count = album.album.album_track_count;
          const album_release_date = album.album.album_release_date;
          const album_release_type = album.album.album_release_type;
          const artist_id = album.album.artist_id;
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

        // ---- THE NEW ALBUMS ---------------------------------------
        albums.map((album) => {
          ALBUMS.push(album);
        });

        ALBUMS.map((album: any) => {
          ALBUM_NAMES.push(album.album_name);
        });
        // ------------------------------------------------------------

        //console.log("----- FINAL ALBUMS READY -----");
        //console.log(albums);
      })
      .catch(function (err: any) {
        console.log(err);
      });

    // Fourth, get the actual artist, create an artist object and then send it
    music
      .artist({ artist_id: artistID })
      .then(function (data: any) {
        const artist = data.message.body.artist;
        const artist_id = artist.artist_id;
        const artist_name = artist.artist_name;
        const artist_country = artist.artist_country;
        const artist_twitter_url = artist.artist_twitter_url;
        //const artist_albums = albums;

        let newArtist = new Artist(
          artist_id,
          artist_name,
          artist_country,
          artist_twitter_url,
          []
        );
        (async function wait() {
          if (albums.length == 0) {
            await delay(5000);
            console.log("Waited 5s");
            console.log("HERES THE ALBUMS -BEFORE- THE MAP");
            console.log(albums);

            console.log("12345 HERES THE MAP 54321");
            albums.map((album) => {
              console.log("--------ALBUMSSSSSSSASSSSS--------");
              console.log(album);
              console.log("--------------------------");
              newArtist.artist_albums.push(album);
            });
            console.log("----- FINAL ARTIST READY -----");
            console.log(newArtist);

            //console.log("----- FINAL ARTIST READY - HERES THE ALBUMS -----");
            //console.log(newArtist.artist_albums);

            res.send(newArtist);
          }
        })();
      })
      .catch(function (err: any) {
        console.log("ERROR: " + err);
      });
  } catch (error) {
    console.log(error);
  }
});

// Get the artists profile pic
app.get("/photo", async (req: Request, res: Response) => {
  console.log("PHOTO ROUTE=============");

  if (ARTIST_NAME === "") {
    await delay(5000);
    console.log("Waited 5s");
  }

  console.log("-----ARTIST NAME-----");
  console.log(ARTIST_NAME.replace(/\s+/g, "-"));

  const artistName: string = ARTIST_NAME.replace(/\s+/g, "-");
  const baseURL = "https://www.musixmatch.com/artist/";

  const browser: Browser = await puppeteer.launch();
  const page: Page = await browser.newPage();

  //await page.goto(baseURL + artistName, { waitUntil: "networkidle0" });
  await page.goto(baseURL + artistName, { waitUntil: "domcontentloaded" });

  const [photo]: any = await page.$x(
    '//*[@id="content"]/div/div[1]/div/div[3]/div/div[1]/img'
  );

  const src = await photo.getProperty("src");
  const srcTxt = await src.jsonValue();

  console.log(srcTxt);
  browser.close();

  res.send(srcTxt);
});

// Get an album cover art
app.get("/album", async (req: Request, res: Response) => {
  console.log("ALBUM ROUTE=============");

  console.log("ALBUM BEFORE REPLACING");
  console.log(ALBUM_NAMES[INDEX]);

  // ALBUM_NAMES...
  const albumName = ALBUM_NAMES[INDEX].replace(/\s+/g, "-").replace(/()/g, "");
  //.replace(/---/g, "-")
  //.replace(/.../g, "");
  //.replace(/--/g, "-");
  const artistName = ARTIST_NAME.replace(/\s+/g, "-");

  console.log("ALBUM_NAME - FINAL");
  console.log(albumName);

  INDEX++;
  //------
  // console.log("+++ARTIST NAME + ALBUM NAME --- FROM THE QUERY+++");
  // console.log(req.query.artist);
  // console.log(req.query.album);
  // //------

  // // Get album id from query
  // const artist: any = req.query.artist;
  // const album: any = req.query.album;

  // const artistName: any = await artist.replace(/\s+/g, "-");

  // ///--------------------- Wait for album.album_name --------------------

  // //if (!album.album_name) {
  // //await delay(5000);
  // //console.log("Waited 5s");

  // // const albumName: any = album.album_name
  // //   ? album.album_name.replace(/\s+/g, "-")
  // //   : null;

  // const albumName: any = await album["album_name"]; //.replace(/\s+/g, "-");
  const baseURL = "https://www.musixmatch.com/album/";

  // //------
  // console.log("+++ARTIST NAME + ALBUM NAME+++");
  // console.log(artistName);
  // console.log(albumName);
  //------

  const browser: Browser = await puppeteer.launch();
  const page: Page = await browser.newPage();

  //const y: any = req.query.album;
  //const z = y.album_name;

  console.log("FULL API URL FOR ALBUM");
  console.log(`${baseURL}${artistName}/${albumName}`);

  await page.goto(`${baseURL}${artistName}/${albumName}`, {
    waitUntil: "domcontentloaded",
  });

  const [photo]: any = await page.$x(
    '//*[@id="site"]/div/div/div/main/div/div[2]/div/div[1]/div/div[2]/div/img'
  );

  const src = await photo.getProperty("src");
  const srcTxt = await src.jsonValue();

  console.log(srcTxt);
  browser.close();

  res.send(srcTxt);
  //}
});

app.listen(PORT, () => console.log("Server running on port 3001"));
