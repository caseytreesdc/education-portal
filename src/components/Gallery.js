import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import "./Gallery.css";
import "./ControlPanel.css";

import Thumbnail from "./Thumbnail";
import CTButton from "./CTButton";

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
      <div className="ControlPanel">
        <Link to={props.panelButtonLink}>
          <CTButton blue text={props.panelButtonText}></CTButton>
        </Link>
        <div className="ControlPanel__text-box">
          <h3>{props.videoTitle}</h3>
          <p className="ControlPanel__description">{props.videoDescription}</p>
        </div>
      </div>
      <div className="Gallery__thumbnails">{thumbNails}</div>
    </div>
  );
};

export default Gallery;
