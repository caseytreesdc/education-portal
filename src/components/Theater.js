import React from "react";
import Header from "./Header";
// import Youtube from "./Youtube";
import "./Theater.css";

const Theater = (props) => {
  // let currentVideo = "https://www.youtube.com/embed/2rgyeydcGB8";
  return (
    <div
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
      className="Theater"
    >
      <Header></Header>
      <div className="Theater__iframe-container"></div>
    </div>
  );
};

export default Theater;
