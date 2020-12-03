import React, { useEffect } from "react";
import imagePath from "../assets/logo2.png";

export const Navbar = () => {
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

  function handleClick() {
    window.location.reload();
  }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-purple-600 pl-6 pr-6 pt-3 pb-3 shadow-lg inset-x-0 top-0 object-top sticky z-10">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src={imagePath} alt="logo" className="w-24 h-18" />
      </div>
      <div className="flex">
        <div className="my-auto pr-1">
          <button
            onClick={handleClick}
            className="h-10 px-5 m-2 text-purple-100 transition-colors duration-150 bg-purple-800 rounded-lg focus:shadow-outline hover:bg-purple-900 shadow-lg"
          >
            Next!
          </button>
        </div>
        <div className="twitterContainer shadow-lg">
          <div className="twitter-embed"></div>
        </div>
      </div>
    </nav>
  );
};
