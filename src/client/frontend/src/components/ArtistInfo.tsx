import React, { useEffect } from "react";
import { ArtistPhoto } from "./ArtistPhoto";
import imagePath from "../assets/spotifybutton.png";

export const ArtistInfo = (props: any) => {
  useEffect(() => {
    const name: string = props.info.name;
    const anchor = document.createElement("a");
    anchor.setAttribute(
      "href",
      "https://twitter.com/share?ref_src=twsrc%5Etfw"
    );
    anchor.setAttribute("class", "twitter-share-button");
    anchor.setAttribute("data-size", "large");
    anchor.setAttribute("data-text", `I discovered ${name} on band.rand()!`);
    anchor.setAttribute("data-url", "https://band-dot-rand.herokuapp.com/");
    anchor.setAttribute("data-via", "gschnei");
    anchor.setAttribute("data-hashtags", "bandDotRand");
    anchor.setAttribute("data-lang", "en");
    anchor.setAttribute("data-show-count", "false");
    anchor.classList.add("mx-auto");
    anchor.classList.add("ml-10");
    document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);

    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, [props.info.name]);

  return (
    <div className=" text-center lg:flex lg:text-left justify-center py-12 px-12 container mx-auto rounded mt-5 mb-8 shadow-lg bg-gray-800">
      <div className="md:text-left lg:mt-4 lg:mt-0 lg:ml-10 flex content-center px-5">
        <ArtistPhoto photo={props.info.images[1].url} />
      </div>
      <div className="lg:mt-4 lg:mt-0 lg:ml-10 flex content-center px-2">
        <div className="m-auto">
          <div className="artistName">
            <h1 className="text-4xl mb-5 text-white text-center md:text-left">
              {props.info.name}
            </h1>
          </div>
          <div className="spotifyButton">
            <a
              href={props.info.external_urls.spotify}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-40 shadow-lg transform transition duration-300 hover:scale-110 mb-6 mx-auto md:text-left"
                alt="spotify button"
                src={imagePath}
              />
            </a>
          </div>
          <div className="mx-auto">
            <div className="twitterContainer mx-auto justify-center text-center object-center">
              <div className="twitter-embed mx-auto justify-center text-center object-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
