import React from "react";

export const Album = (props: any) => {
  return (
    <div>
      <a href={props.album.external_urls.spotify}>
        <img alt={"Album Cover"} src={props.album.images[1].url} />
      </a>
    </div>
  );
};
