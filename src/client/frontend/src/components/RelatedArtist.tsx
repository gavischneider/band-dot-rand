import React from "react";

export const RelatedArtist = (props: any) => {
  console.log("------RELATED ARTISTS PROPS------");
  console.log(props);
  return (
    <div className="max-w-xs rounded shadow-lg p-4 transform transition duration-300 hover:scale-110">
      <div className="">
        <div className="">
          <a
            href={props.url}
            target="_blank"
            rel="noreferrer"
            className="justify-center"
          >
            <img
              className="rounded-full h-24 w-24 mx-auto"
              src={props.images[0].url}
              alt={"artist"}
            />
          </a>
        </div>
        <div className="font-bold text-purple-500 text-lg mb-2">
          {props.name}
        </div>
      </div>
    </div>
  );
};
