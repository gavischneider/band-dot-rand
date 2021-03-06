import React from "react";

export const ArtistPhoto = (props: any) => {
  return (
    <div className="mx-auto">
      <img
        className="rounded-full h-64 w-64 shadow-lg"
        src={props.photo}
        alt={"artist"}
      />
    </div>
  );
};
