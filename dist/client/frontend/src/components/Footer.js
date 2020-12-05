"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
const react_1 = __importDefault(require("react"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
exports.Footer = () => {
    const year = new Date().getFullYear();
    return (react_1.default.createElement("div", { className: "pt-20" },
        react_1.default.createElement("div", { className: "flex items-center justify-center flex-wrap bg-purple-600 p-3 shadow-lg inset-x-0 top-0 object-top sticky z-10" },
            `© ${year}`,
            react_1.default.createElement("a", { href: "https://gavischneider.github.io/Personal-Site/", target: "_blank", rel: "noreferrer", className: "pl-1" }, "Gavi Schneider"),
            react_1.default.createElement("div", { className: "social-icons" },
                react_1.default.createElement("a", { href: "https://www.linkedin.com/in/gavi-schneider-27a87837/", target: "_blank", rel: "noreferrer", className: "linkedin social pl-2" },
                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faLinkedin, size: "2x" })),
                react_1.default.createElement("a", { href: "https://twitter.com/gschnei", target: "_blank", rel: "noreferrer", className: "twitter social pl-2" },
                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faTwitter, size: "2x" })),
                react_1.default.createElement("a", { href: "https://www.instagram.com/gavischneider/", target: "_blank", rel: "noreferrer", className: "instagram social pl-2" },
                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faInstagram, size: "2x" })),
                react_1.default.createElement("a", { href: "https://github.com/gavischneider", target: "_blank", rel: "noreferrer", className: "github social pl-2" },
                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faGithub, size: "2x" })),
                react_1.default.createElement("a", { href: "https://dev.to/gschnei", target: "_blank", rel: "noreferrer", className: "dev social pl-2" },
                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faDev, size: "2x" }))))));
};
