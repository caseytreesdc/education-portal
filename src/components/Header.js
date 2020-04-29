import React from "react";
import "./Header.css";
import CTButton from "./CTButton";

import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header__nav">
        <img src={logo} className="Header__nav-logo"></img>
        <CTButton noBorder text="Casey Trees Education"></CTButton>
        <CTButton noBorder text="Tea and Trees"></CTButton>
        <CTButton noBorder text="Your City, Your Trees"></CTButton>
        <CTButton noBorder text="Resources"></CTButton>
        <CTButton text="DONATE"></CTButton>
        <CTButton text="WATCH"></CTButton>
      </div>
    </div>
  );
};

export default Header;
