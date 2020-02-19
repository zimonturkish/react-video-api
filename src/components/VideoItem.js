import React from "react";

const VideoItem = ({ video }) => {
  // props now contains the video property (video=item)
  return <div>{video.snippet.title}</div>; // to print the titles of the videos on the screen
};

export default VideoItem;
