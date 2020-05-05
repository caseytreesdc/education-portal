import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

import "./Gallery.css";
import "./ControlPanel.css";

import Thumbnail from "./Thumbnail";

const Gallery = (props) => {
  let keys = Object.keys(props.thumbs);
  let values = Object.values(props.thumbs);
  let thumbNails = values.map((item, index) => {
    return (
      <Link to={"/" + keys[index]}>
        <Thumbnail imgSrc={item}></Thumbnail>
      </Link>
    );
  });
  return (
    <div className="Gallery">
      <VideoInfo
        buttonLink={props.panelButtonLink}
        buttonText={props.panelButtonText}
        title={props.videoTitle}
        desctiption={props.videoDescription}
      ></VideoInfo>
      <div className="Gallery__thumbnails">{thumbNails}</div>
    </div>
  );
};

export default Gallery;
