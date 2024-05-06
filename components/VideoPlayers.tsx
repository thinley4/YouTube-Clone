"use client";

import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ url }: { url: any }) => {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  });

  return (
    <>
      {hasWindow ? (
        <ReactPlayer width={360} url={url} controls={true} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default VideoPlayer;
