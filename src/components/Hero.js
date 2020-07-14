import React from "react";
import Form from "./Form";

import "./Hero.css";

import virtualCtLogo from "../assets/wblack-virtual-ct-logo.png";
// import CTRemoteTitle from "../assets/ct-remote-title.png";

const Hero = (props) => {
  if (props.splash) {
    return (
      <div
        style={{ backgroundImage: `url(${props.backgroundImage})` }}
        className="Hero"
      >
        <h1 className="Hero__title">Casey Trees Remote</h1>
        <img
          alt="ct-virtual classes"
          className="Hero__virtual-logo-splash"
          src={virtualCtLogo}
        ></img>
      </div>
    );
  }
  return (
    <div
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
      className="Hero"
    >
      <Form formSrc={props.formSrc}></Form>
    </div>
  );
};

export default Hero;
