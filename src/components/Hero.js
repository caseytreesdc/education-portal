import React from "react";
import Form from "./Form";

import "./Hero.css";

import virtualCtLogo from "../assets/virtual-ct-logo.png";

const Hero = (props) => {
  let logoClassName = "Hero__virtual-logo"
  if (props.splash) {
    logoClassName += "-splash"
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
          className={logoClassName}
          src={virtualCtLogo}
        ></img>
      </div>
    </div>
  );
};

export default Hero;
