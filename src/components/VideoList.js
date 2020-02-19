import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
    return <VideoItem onVideoSelect={onVideoSelect} video={video} />; //video we are iterating over, in the map()
  });
  return <div className="ui relaxed diveded list">{renderedList}</div>;
};

export default VideoList;
