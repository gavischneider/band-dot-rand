import React, { useEffect, useState } from "react";
import axios from "axios";

export const Album = (props: any) => {
  return (
    <div>
      <img alt={"Album Cover"} src={props.album.images[1].url} />
    </div>
  );
};
