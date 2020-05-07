import React from "react";
import { Link } from "react-router-dom";

import "./Gallery.css";
import "./VideoInfo.css";

import CTButton from "./CTButton";
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
      <a href="#thumbnails">
        <div className="VideoInfo">
          <div className="VideoInfo__text-box">
            <h3>{props.videoTitle}</h3>
            <p className="VideoInfo__description">{props.videoDescription}</p>
          </div>
          <Link to={props.panelButtonLink}>
            <CTButton blue text={props.panelButtonText}></CTButton>
          </Link>
        </div>
      </a>
      <div id="thumbnails" className="Gallery__thumbnails">{thumbNails}</div>
    </div>
  );
};

export default Gallery;
