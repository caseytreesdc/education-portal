import React from "react";
import Header from "./Header";
import Form from "./Form";

import "./Hero.css";

const Hero = (props) => {
  return (
    <div
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
      className="Hero"
    >
      <Header></Header>
      <Form formSrc={props.formSrc}></Form>
    </div>
  );
};

export default Hero;
