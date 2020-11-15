import React from "react";

export const Album = (props: any) => {
  return (
    <div>
      <img alt={"Album Cover"} src={props.album.images[1].url} />
    </div>
  );
};
