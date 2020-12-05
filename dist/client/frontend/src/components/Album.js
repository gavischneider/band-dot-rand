"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Album = void 0;
const react_1 = __importDefault(require("react"));
exports.Album = (props) => {
    return (react_1.default.createElement("div", { className: "max-w-xs rounded shadow-lg transform transition duration-300 hover:scale-110 bg-gray-800 mx-auto" },
        react_1.default.createElement("div", { className: "object-none object-fill" },
            react_1.default.createElement("a", { href: props.album.external_urls.spotify, target: "_blank", rel: "noreferrer" },
                react_1.default.createElement("img", { alt: "Album Cover", src: props.album.images[1].url }))),
        react_1.default.createElement("div", { className: "" },
            react_1.default.createElement("div", { className: "px-6 py-4 mx-auto " },
                react_1.default.createElement("div", { className: "" },
                    react_1.default.createElement("div", { className: "font-bold text-purple-600 text-lg mb-2" }, props.album.name),
                    react_1.default.createElement("div", { className: "font-bold text-white text-md mb-2" }, props.album.release_date.replaceAll("-", "/")))))));
};
