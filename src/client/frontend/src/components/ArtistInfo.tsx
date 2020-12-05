import React, { useEffect } from "react";
import { ArtistPhoto } from "./ArtistPhoto";
import imagePath from "../assets/spotifybutton.png";

export const ArtistInfo = (props: any) => {
  //console.log("PROPS");
  //console.log(props);

  useEffect(() => {
    const anchor = document.createElement("a");
    anchor.setAttribute(
      "href",
      "https://twitter.com/share?ref_src=twsrc%5Etfw"
    );
    anchor.setAttribute("class", "twitter-share-button");
    anchor.setAttribute("data-size", "large");
    anchor.setAttribute(
      "data-text",
      "I'm discovering new artists on band.rand()!"
    );
    anchor.setAttribute("data-url", "https://www.banddotrand.software");
    anchor.setAttribute("data-via", "gschnei");
    anchor.setAttribute("data-hashtags", "bandDotRand");
    anchor.setAttribute("data-lang", "en");
    anchor.setAttribute("data-show-count", "false");
    document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);

    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    <div className="lg:flex justify-center py-12 px-12 container mx-auto rounded mt-5 mb-8 shadow-lg bg-gray-800">
      <div className="text-left lg:mt-4 lg:mt-0 lg:ml-10 flex content-center px-5">
        <ArtistPhoto photo={props.info.images[1].url} />
      </div>
      <div className="text-left lg:mt-4 lg:mt-0 lg:ml-10 flex content-center px-2">
        <div className="m-auto">
          <h1 className="text-4xl mb-5 text-white">{props.info.name}</h1>
          {props.info.external_urls.spotify ? (
            <a
              href={props.info.external_urls.spotify}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-40 shadow-lg transform transition duration-300 hover:scale-110 mb-6"
                alt="spotify button"
                src={imagePath}
              />
            </a>
          ) : (
            <h3>""</h3>
          )}
          <div className="twitterContainer">
            <div className="twitter-embed"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
