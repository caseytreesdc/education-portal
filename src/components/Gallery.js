import React from "react";
import { Link } from "react-router-dom";

import "./Gallery.css";
import "./VideoInfo.css";

import CTButton from "./CTButton";
import Thumbnail from "./Thumbnail";

const Gallery = (props) => {
  let thumbNails = props.thumbs.map((item) => {
    return (
      <div>
        <Link to={"/" + item.path}>
          <Thumbnail imgSrc={item.imageSrc}></Thumbnail>
        </Link>
        <h3>{item.caption}</h3>
      </div>
    );
  });
  return (
    <div className="Gallery">
      <a href="#thumbnails">
        <div className="VideoInfo">
          <div className="VideoInfo__text-box">
            <h3>{props.panelTitle}</h3>
            <p className="VideoInfo__description">{props.panelDescription}</p>
          </div>
          <Link to={props.panelButtonLink}>
            <CTButton blue text={props.panelButtonText}></CTButton>
          </Link>
        </div>
      </a>
      <div id="thumbnails" className="Gallery__thumbnails">
        {thumbNails}
      </div>
    </div>
  );
};

export default Gallery;
