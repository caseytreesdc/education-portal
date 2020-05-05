import React from "react";
import "./Header.css";
import CTButton from "./CTButton";

import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="Header">
      <a
        className="Header__logo-container"
        href="https://caseytrees.org/"
        target="__blank"
      >
        <img alt="Casey Trees' logo" src={logo} className="Header__logo"></img>
      </a>
      <div className="Header__buttons">
        <CTButton
          orange
          url="https://caseytrees.org/"
          text="HOME"
        ></CTButton>
        <CTButton
          green
          url="https://caseytrees.org/resources/"
          text="DONATE"
        ></CTButton>
      </div>
    </div>
  );
};

export default Header;
