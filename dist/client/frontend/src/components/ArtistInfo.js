import React, { useEffect } from "react";
import { ArtistPhoto } from "./ArtistPhoto";
import imagePath from "../assets/spotifybutton.png";
export const ArtistInfo = (props) => {
    //console.log("PROPS");
    //console.log(props);
    useEffect(() => {
        const name = props.info.name;
        const anchor = document.createElement("a");
        anchor.setAttribute("href", "https://twitter.com/share?ref_src=twsrc%5Etfw");
        anchor.setAttribute("class", "twitter-share-button");
        anchor.setAttribute("data-size", "large");
        anchor.setAttribute("data-text", `I discovered ${name} on band.rand()!`);
        anchor.setAttribute("data-url", "https://www.banddotrand.software");
        anchor.setAttribute("data-via", "gschnei");
        anchor.setAttribute("data-hashtags", "bandDotRand");
        anchor.setAttribute("data-lang", "en");
        anchor.setAttribute("data-show-count", "false");
        document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);
        const script = document.createElement("script");
        script.setAttribute("src", "https://platform.twitter.com/widgets.js");
        document.getElementsByClassName("twitter-embed")[0].appendChild(script);
    }, [props.info.name]);
    return (React.createElement("div", { className: "lg:flex justify-center py-12 px-12 container mx-auto rounded mt-5 mb-8 shadow-lg bg-gray-800" },
        React.createElement("div", { className: "text-left lg:mt-4 lg:mt-0 lg:ml-10 flex content-center px-5" },
            React.createElement(ArtistPhoto, { photo: props.info.images[1].url })),
        React.createElement("div", { className: "text-left lg:mt-4 lg:mt-0 lg:ml-10 flex content-center px-2" },
            React.createElement("div", { className: "m-auto" },
                React.createElement("h1", { className: "text-4xl mb-5 text-white" }, props.info.name),
                props.info.external_urls.spotify ? (React.createElement("a", { href: props.info.external_urls.spotify, target: "_blank", rel: "noreferrer" },
                    React.createElement("img", { className: "w-40 shadow-lg transform transition duration-300 hover:scale-110 mb-6", alt: "spotify button", src: imagePath }))) : (React.createElement("h3", null, "\"\"")),
                React.createElement("div", { className: "twitterContainer" },
                    React.createElement("div", { className: "twitter-embed" }))))));
};
