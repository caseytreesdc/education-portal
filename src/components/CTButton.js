import React from "react";
import "./CTButton.css";

const CTButton = (props) => {
  let className = "CTButton";
  let target = "__blank";
  if (props.orange) {
    className += " orange";
  } else if (props.green) {
    className += " green";
  } else if (props.blue) {
    className += " blue";
  }
  if (props.samePage) {
    return (
      <a className="CTButton__link" href={props.url}>
      <div className={className}>
        <p className="CTButton__text">{props.text}</p>
      </div>
    </a>
    )
  }
  return (
    <a className="CTButton__link" href={props.url} target={target}>
      <div className={className}>
        <p className="CTButton__text">{props.text}</p>
      </div>
    </a>
  );
};

export default CTButton;
