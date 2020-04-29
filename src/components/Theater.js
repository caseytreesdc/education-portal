import React from "react";
import Header from "./Header";
import "./Theater.css";
import Form from "./Form";
import Youtube from "./Youtube";

const Theater = (props) => {
  let videoUrl = "https://www.youtube.com/embed/8uhAANu4H3k";

  let parameters = window.location.search;

  if (parameters == "?submitted") {
    return (
      <div
        style={{ backgroundImage: `url(${props.backgroundImage})` }}
        className="Theater"
      >
        <Header></Header>
        <Youtube vidSrc={videoUrl}></Youtube>
      </div>
    );
  } else {
    return (
      <div
        style={{ backgroundImage: `url(${props.backgroundImage})` }}
        className="Theater"
      >
        <Header></Header>
        <Form></Form>
      </div>
    );
  }
};

export default Theater;
