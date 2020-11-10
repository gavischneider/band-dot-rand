"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
const react_1 = __importDefault(require("react"));
const RandomSong_1 = require("./components/RandomSong");
function App() {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(RandomSong_1.RandomSong, null)));
}
exports.default = App;
