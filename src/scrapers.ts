import { Browser, Page } from "puppeteer";

const puppeteer = require("puppeteer");

//let testURL: string = "https://www.musixmatch.com/artist/Muse";

async function scrapeArtistPage(url: string) {
  console.log("hello");
  const browser: Browser = await puppeteer.launch();
  const page: Page = await browser.newPage();
  await page.goto(url);

  // Get artist profile pic
  const [photo]: any = await page.$x(
    '//*[@id="content"]/div/div[1]/div/div[3]/div/div[1]/img'
  );
  const src = await photo.getProperty("src");
  const srcTxt = await src.jsonValue();

  console.log(srcTxt);

  browser.close();

  return srcTxt;
}

//scrapeArtistPage(testURL);

exports.scrapeArtistPage = scrapeArtistPage;
module.exports = scrapeArtistPage;
export default scrapeArtistPage;
