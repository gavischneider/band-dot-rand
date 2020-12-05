"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatedArtist = void 0;
const react_1 = __importDefault(require("react"));
exports.RelatedArtist = (props) => {
    console.log("------RELATED ARTISTS PROPS------");
    console.log(props);
    return (react_1.default.createElement("div", { className: "max-w-xs rounded shadow-lg p-4 transform transition duration-300 hover:scale-110 mb-4 mt-4 bg-gray-800" },
        react_1.default.createElement("div", { className: "" },
            react_1.default.createElement("div", { className: "" },
                react_1.default.createElement("a", { href: props.url, target: "_blank", rel: "noreferrer", className: "justify-center" },
                    react_1.default.createElement("img", { className: "rounded-full h-32 w-32 mx-auto", src: props.images[0].url, alt: "artist" }))),
            react_1.default.createElement("div", { className: "font-bold text-purple-600 text-lg mb-2 mt-3" }, props.name))));
};
