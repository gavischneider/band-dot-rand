import React from "react";
import { ArtistPhoto } from "./ArtistPhoto";
import imagePath from "../public/spotifybutton2.png";

export const ArtistInfo = (props: any) => {
  console.log("PROPS");
  console.log(props);

  return (
    <div className="flex justify-center py-12">
      <div>
        <ArtistPhoto photo={props.info.images[1].url} />
      </div>
      <div className="text-left mt-4 mt-0 ml-6 flex content-center">
        <div className="m-auto">
          <h1 className="text-3xl">{props.info.name}</h1>
          {props.info.external_urls.spotify ? (
            <a href={props.info.external_urls.spotify} target="_blank">
              <img
                className="w-40 shadow-lg"
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
