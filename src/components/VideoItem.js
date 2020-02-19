import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video }) => {
  // props now contains the video property (video=item)
  return (
    <div className="video-item item">
      <img className="ui image" src={video.snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  ); // to print the titles of the videos on the screen
};

export default VideoItem;
