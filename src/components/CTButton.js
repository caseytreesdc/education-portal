import React from "react";
import "./CTButton.css";

const CTButton = (props) => {
  let className = "CTButton";

  if (props.orange) {
    className += " orange"
  } else if (props.green) {
    className += " green"
  } else if (props.blue) {
    className += " blue"
  }

  return (
    <a className="CTButton__link" href={props.url} target="__blank">
      <div className={className}>
        <p className="CTButton__text">{props.text}</p>
      </div>
    </a>
  );
};

export default CTButton;
