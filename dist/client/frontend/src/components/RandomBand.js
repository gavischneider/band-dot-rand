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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomBand = void 0;
const react_1 = __importStar(require("react"));
const axios_1 = __importDefault(require("axios"));
const ArtistInfo_1 = require("./ArtistInfo");
const ArtistsAlbums_1 = require("./ArtistsAlbums");
const Navbar_1 = require("./Navbar");
const Footer_1 = require("./Footer");
const ArtistsRelatedArtists_1 = require("./ArtistsRelatedArtists");
exports.RandomBand = () => {
    const [initialState, setInitialState] = react_1.useState([]);
    // Backend API
    const proxyUrl = "http://localhost:3001";
    const api = "/random";
    react_1.useEffect(() => {
        (function callAPI() {
            return __awaiter(this, void 0, void 0, function* () {
                axios_1.default
                    .get(proxyUrl + api)
                    .then((response) => {
                    setInitialState([
                        Object.assign({}, response.data),
                    ]);
                    console.log("RESPONSE.DATA");
                    console.log(response.data);
                })
                    .catch((error) => console.log(error));
            });
        })();
    }, []);
    console.log("initialState: ");
    console.log(initialState);
    if (!initialState[0])
        return react_1.default.createElement("span", null, "loading...");
    return (react_1.default.createElement("div", { className: "bg-gray-900" },
        react_1.default.createElement(Navbar_1.Navbar, null),
        react_1.default.createElement(ArtistInfo_1.ArtistInfo, { info: initialState[0] }),
        react_1.default.createElement(ArtistsAlbums_1.ArtistsAlbums, { albums: initialState[0].albums }),
        react_1.default.createElement(ArtistsRelatedArtists_1.ArtistsRelatedArtists, { relatedArtists: initialState[0].relatedArtists }),
        react_1.default.createElement(Footer_1.Footer, null)));
};
