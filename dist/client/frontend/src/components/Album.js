import React from "react";
export const Album = (props) => {
    return (React.createElement("div", { className: "rounded shadow-lg transform transition duration-300 hover:scale-110 bg-gray-800 mx-auto", id: "albumCard" },
        React.createElement("style", null, `
        #albumCard {
          max-width: 18rem
        }`),
        React.createElement("div", { className: "object-none object-fill" },
            React.createElement("a", { href: props.album.external_urls.spotify, target: "_blank", rel: "noreferrer" },
                React.createElement("img", { alt: "Album Cover", src: props.album.images[1].url }))),
        React.createElement("div", { className: "" },
            React.createElement("div", { className: "px-6 py-4 mx-auto " },
                React.createElement("div", { className: "" },
                    React.createElement("div", { className: "font-bold text-purple-600 text-lg mb-2" }, props.album.name),
                    React.createElement("div", { className: "font-bold text-white text-md mb-2" }, props.album.release_date.replaceAll("-", "/")))))));
};
