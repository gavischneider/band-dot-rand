import React from "react";

export const ArtistPhoto = (props: any) => {
  console.log("PROPS");
  console.log(props);

  return (
    <div className="mx-auto">
      <img className="rounded-full" src={props.photo} alt={"artist"} />
    </div>
  );
};
