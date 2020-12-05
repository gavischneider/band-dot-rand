"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistInfo = void 0;
const react_1 = __importStar(require("react"));
const ArtistPhoto_1 = require("./ArtistPhoto");
const spotifybutton_png_1 = __importDefault(require("../assets/spotifybutton.png"));
exports.ArtistInfo = (props) => {
    //console.log("PROPS");
    //console.log(props);
    react_1.useEffect(() => {
        const name = props.info.name;
        const anchor = document.createElement("a");
        anchor.setAttribute("href", "https://twitter.com/share?ref_src=twsrc%5Etfw");
        anchor.setAttribute("class", "twitter-share-button");
        anchor.setAttribute("data-size", "large");
        anchor.setAttribute("data-text", `I discovered ${name} on band.rand()!`);
        anchor.setAttribute("data-url", "https://www.banddotrand.software");
        anchor.setAttribute("data-via", "gschnei");
        anchor.setAttribute("data-hashtags", "bandDotRand");
        anchor.setAttribute("data-lang", "en");
        anchor.setAttribute("data-show-count", "false");
        document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);
        const script = document.createElement("script");
        script.setAttribute("src", "https://platform.twitter.com/widgets.js");
        document.getElementsByClassName("twitter-embed")[0].appendChild(script);
    }, [props.info.name]);
    return (react_1.default.createElement("div", { className: "lg:flex justify-center py-12 px-12 container mx-auto rounded mt-5 mb-8 shadow-lg bg-gray-800" },
        react_1.default.createElement("div", { className: "text-left lg:mt-4 lg:mt-0 lg:ml-10 flex content-center px-5" },
            react_1.default.createElement(ArtistPhoto_1.ArtistPhoto, { photo: props.info.images[1].url })),
        react_1.default.createElement("div", { className: "text-left lg:mt-4 lg:mt-0 lg:ml-10 flex content-center px-2" },
            react_1.default.createElement("div", { className: "m-auto" },
                react_1.default.createElement("h1", { className: "text-4xl mb-5 text-white" }, props.info.name),
                props.info.external_urls.spotify ? (react_1.default.createElement("a", { href: props.info.external_urls.spotify, target: "_blank", rel: "noreferrer" },
                    react_1.default.createElement("img", { className: "w-40 shadow-lg transform transition duration-300 hover:scale-110 mb-6", alt: "spotify button", src: spotifybutton_png_1.default }))) : (react_1.default.createElement("h3", null, "\"\"")),
                react_1.default.createElement("div", { className: "twitterContainer" },
                    react_1.default.createElement("div", { className: "twitter-embed" }))))));
};
