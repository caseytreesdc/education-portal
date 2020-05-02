import React from "react";
import Form from "./Form";

import "./Hero.css";

import virtualCtLogo from "../assets/virtual-ct-logo.png";

const Hero = (props) => {
  return (
    <div
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
      className="Hero"
    >
      <Form formSrc={props.formSrc}></Form>
      <img alt="ct-virtual classes" className="Hero__virtual-logo" src={virtualCtLogo}></img>
    </div>
  );
};

export default Hero;
