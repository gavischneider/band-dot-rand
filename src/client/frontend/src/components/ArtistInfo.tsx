import React from "react";
import { ArtistPhoto } from "./ArtistPhoto";
import imagePath from "../assets/spotifybutton2.png";

export const ArtistInfo = (props: any) => {
  console.log("PROPS");
  console.log(props);

  return (
    <div className="lg:flex justify-center py-12">
      <div className="text-left lg:mt-4 lg:mt-0 lg:ml-10 flex content-center px-5">
        <ArtistPhoto photo={props.info.images[1].url} />
      </div>
      <div className="text-left lg:mt-4 lg:mt-0 lg:ml-10 flex content-center px-2">
        <div className="m-auto">
          <h1 className="text-4xl mb-5">{props.info.name}</h1>
          {props.info.external_urls.spotify ? (
            <a href={props.info.external_urls.spotify} target="_blank">
              <img
                className="w-40 shadow-lg transform transition duration-300 hover:scale-110"
                alt="spotify button"
                src={imagePath}
              />
            </a>
          ) : (
            <h3>""</h3>
          )}
        </div>
      </div>
    </div>
  );
};
