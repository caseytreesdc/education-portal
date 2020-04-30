import React from "react";
import "./Thumbnail.css";

const Thumbnail = (props) => {
  return (
    <div className="Thumbnail">
      <svg
        className="play-icon"
        width="50"
        height="50"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="0,0 0,50 50,25" />
      </svg>
      <img alt={props.imgSrc} className="Thumbnail__image" src={props.imgSrc} />
    </div>
  );
};

export default Thumbnail;
