import React from "react";
import { ArtistPhoto } from "./ArtistPhoto";

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
          <h3 className="text-xl">{props.info.name}</h3>
          <h3>Artist ID: {props.info.id}</h3>
          {props.info.external_urls.spotify ? (
            <h3>
              <a href={props.info.external_urls.spotify}>Artist Spotify URL</a>
            </h3>
          ) : (
            <h3>""</h3>
          )}
        </div>
      </div>
    </div>
  );
};
