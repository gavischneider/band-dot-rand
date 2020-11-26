import React from "react";

export const RelatedArtist = (props: any) => {
  console.log("------RELATED ARTISTS PROPS------");
  console.log(props);
  return (
    <div className="">
      <div className="">
        <img
          className="rounded-full"
          src={props.images[0].url}
          alt={"artist"}
        />
        <div className="font-bold text-purple-500 text-lg mb-2">
          {props.name}
        </div>
      </div>
    </div>
  );
};
