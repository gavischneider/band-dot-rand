import { Browser, Page } from "puppeteer";

const puppeteer = require("puppeteer");

let testURL: string =
  "https://www.musixmatch.com/lyrics/Muse/Get-Up-and-Fight?utm_source=application&utm_campaign=api&utm_medium=Student+Developer%3A1409620630471";

async function scrapeArtistPage(url: string) {
  console.log("hello");
  const browser: Browser = await puppeteer.launch();
  const page: Page = await browser.newPage();
  await page.goto(url);

  //   const [artistButton]: any = await page.$x(
  //     '//*[@id="site"]/div/div/div/main/div/div/div[2]/div/div/div/div[2]/div[1]/div[1]/h2/span/a'
  //   );

  const [photo]: any = await page.$x(
    '//*[@id="site"]/div/div/div/main/div/div/div[2]/div/div/div/div[1]/div/div/div/img'
  );
  const src = await photo.getProperty("src");
  const srcTxt = await src.jsonValue();

  console.log(srcTxt);
}

scrapeArtistPage(testURL);
