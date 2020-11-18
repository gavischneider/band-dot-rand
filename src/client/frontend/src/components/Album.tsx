import React from "react";

export const Album = (props: any) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-auto">
      <div className="object-fill">
        <a href={props.album.external_urls.spotify} target="_blank">
          <img alt={"Album Cover"} src={props.album.images[1].url} />
        </a>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-lg mb-2">
          {props.album.name}
        </div>
        <div className="font-bold text-black-500 text-md mb-2">
          {props.album.release_date.replaceAll("-", "/")}
        </div>
      </div>
    </div>
  );
};
