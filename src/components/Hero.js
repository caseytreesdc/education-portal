import React from "react";
import Form from "./Form";

import "./Hero.css";

const Hero = (props) => {
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
