"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
const react_1 = __importDefault(require("react"));
const RandomBand_1 = require("./components/RandomBand");
function App() {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(RandomBand_1.RandomBand, null)));
}
exports.default = App;
