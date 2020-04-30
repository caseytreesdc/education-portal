import React from "react";
import "./CTButton.css";

const CTButton = (props) => {
  let className = "CTButton";

  return (
    <a className={className + "__link"} href={props.url} target="__blank">
      <div className={className}>
        <p className={className + "__text"}>{props.text}</p>
      </div>
    </a>
  );
};

export default CTButton;
