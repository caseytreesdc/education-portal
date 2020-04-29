import React from "react";
import Header from "./Header";
import "./Theater.css";
import Form from './Form';

// import Youtube from "./Youtube";

const Theater = (props) => {
  // let currentVideo = "https://www.youtube.com/embed/2rgyeydcGB8";
  return (
    <div
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
      className="Theater"
    >
      <Header></Header>
      <Form></Form>
    </div>
  );
};

export default Theater;
