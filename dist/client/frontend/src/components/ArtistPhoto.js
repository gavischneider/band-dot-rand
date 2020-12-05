"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistPhoto = void 0;
const react_1 = __importDefault(require("react"));
exports.ArtistPhoto = (props) => {
    console.log("PROPS");
    console.log(props);
    return (react_1.default.createElement("div", { className: "mx-auto" },
        react_1.default.createElement("img", { className: "rounded-full h-64 w-64 shadow-lg", src: props.photo, alt: "artist" })));
};
