"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navbar = void 0;
const react_1 = __importDefault(require("react"));
const logo2_png_1 = __importDefault(require("../assets/logo2.png"));
exports.Navbar = () => {
    function handleClick() {
        window.location.reload();
    }
    return (react_1.default.createElement("nav", { className: "flex items-center justify-between flex-wrap bg-purple-600 pl-6 pr-6 pt-3 pb-3 shadow-lg inset-x-0 top-0 object-top sticky z-10" },
        react_1.default.createElement("div", { className: "flex items-center flex-shrink-0 text-white mr-6" },
            react_1.default.createElement("img", { src: logo2_png_1.default, alt: "logo", className: "w-24 h-18" })),
        react_1.default.createElement("div", { className: "flex" },
            react_1.default.createElement("div", { className: "my-auto pr-1" },
                react_1.default.createElement("button", { onClick: handleClick, className: "bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 hover:from-teal-400 hover:to-blue-500  h-10 px-5 m-2 transition-colors duration-120 rounded-lg focus:shadow-outline shadow-lg transition duration-400 ease-in-out transform hover:-translate-y-1 hover:scale-110" }, "Next!")))));
};
