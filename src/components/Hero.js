import React from "react";
import Form from "./Form";

import "./Hero.css";

import virtualCtLogo from "../assets/virtual-ct-logo.png";
import CTRemoteTitle from "../assets/ct-remote-title.png";

const Hero = (props) => {
  if (props.splash) {
    return (
      <div
        style={{ backgroundImage: `url(${props.backgroundImage})` }}
        className="Hero"
      >
        <div className="Hero__title-container"><img className="Hero__title" alt="Casey Trees Remote" src={CTRemoteTitle}></img></div>
        <div className="Hero__virtual-logo-container">
          <img
            alt="ct-virtual classes"
            className="Hero__virtual-logo-splash"
            src={virtualCtLogo}
          ></img>
        </div>
      </div>
    );
  }
  return (
    <div
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
      className="Hero"
    >
      <Form formSrc={props.formSrc}></Form>
      <div className="Hero__virtual-logo-container">
        <img
          alt="ct-virtual classes"
          className="Hero__virtual-logo"
          src={virtualCtLogo}
        ></img>
      </div>
    </div>
  );
};

export default Hero;
