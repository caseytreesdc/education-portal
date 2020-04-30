import React from "react";
import "./Header.css";
import CTButton from "./CTButton";

import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="Header">
        <a href="https://caseytrees.org/" target="__blank"><img alt="Casey Trees' logo" src={logo} className="Header__nav-logo"></img></a>
        <CTButton url="https://caseytrees.org/plant/" text="PLANT"></CTButton>
        <CTButton url="https://caseytrees.org/resources/" text="LEARN"></CTButton>
        <CTButton url="https://caseytrees.org/waystogive/evergreen-membership-donation-form/" text="DONATE"></CTButton>
    </div>
  );
};

export default Header;
