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
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer = require("puppeteer");
//let testURL: string = "https://www.musixmatch.com/artist/Muse";
function scrapeArtistPage(url) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("hello");
        const browser = yield puppeteer.launch();
        const page = yield browser.newPage();
        yield page.goto(url);
        // Get artist profile pic
        const [photo] = yield page.$x('//*[@id="content"]/div/div[1]/div/div[3]/div/div[1]/img');
        const src = yield photo.getProperty("src");
        const srcTxt = yield src.jsonValue();
        console.log(srcTxt);
        browser.close();
        return srcTxt;
    });
}
//scrapeArtistPage(testURL);
exports.scrapeArtistPage = scrapeArtistPage;
module.exports = scrapeArtistPage;
exports.default = scrapeArtistPage;
