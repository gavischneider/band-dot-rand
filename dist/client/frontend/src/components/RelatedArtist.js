import React from "react";
export const RelatedArtist = (props) => {
    return (React.createElement("div", { className: "max-w-xs rounded shadow-lg p-4 transform transition duration-300 hover:scale-110 mb-4 mt-4 bg-gray-800" },
        React.createElement("div", { className: "" },
            React.createElement("div", { className: "" },
                React.createElement("a", { href: props.url, target: "_blank", rel: "noreferrer", className: "justify-center" },
                    React.createElement("img", { className: "rounded-full h-32 w-32 mx-auto", src: props.images[0].url, alt: "artist" }))),
            React.createElement("div", { className: "font-bold text-purple-600 text-lg mb-2 mt-3" }, props.name))));
};
