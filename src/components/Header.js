import React from "react";
import "./Header.css";
import CTButton from './CTButton'

import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header__nav">
        <img src={logo} className="Header__nav-logo"></img>
        <a className="Header__nav-main">Casey Trees Education</a>
        <a className="Header__nav-items">Tea and Trees</a>
        <a className="Header__nav-items">Your City, Your Trees</a>
        <a className="Header__nav-items">Resources</a>
      </div>
      <div className="Header__buttons">
          <CTButton text="DONATE"></CTButton>
      </div>
    </div>
  );
};

export default Header;
