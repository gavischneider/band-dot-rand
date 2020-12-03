import React from "react";

export const Album = (props: any) => {
  return (
    <div className="max-w-xs rounded shadow-lg transform transition duration-300 hover:scale-110 bg-gray-800">
      <div className="object-fill">
        <a
          href={props.album.external_urls.spotify}
          target="_blank"
          rel="noreferrer"
        >
          <img alt={"Album Cover"} src={props.album.images[1].url} />
        </a>
      </div>
      <div className="">
        <div className="px-6 py-4 mx-auto ">
          <div className="">
            <div className="font-bold text-purple-600 text-lg mb-2">
              {props.album.name}
            </div>
            <div className="font-bold text-white text-md mb-2">
              {props.album.release_date.replaceAll("-", "/")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
