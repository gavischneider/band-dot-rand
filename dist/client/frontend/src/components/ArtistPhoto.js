import React from "react";
export const ArtistPhoto = (props) => {
    return (React.createElement("div", { className: "mx-auto" },
        React.createElement("img", { className: "rounded-full h-64 w-64 shadow-lg", src: props.photo, alt: "artist" })));
};
