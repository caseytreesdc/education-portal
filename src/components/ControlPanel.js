import React from "react";

import "./ControlPanel.css";
import CTButton from "./CTButton";

class ControlPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ControlPanel">
        <CTButton blue text="Browse Series"></CTButton>
        <div className="ControlPanel__text-box">
          <h3>Name of Series</h3>
          <p className="ControlPanel__description">
            A descripton, telling us a little bit about the show, and then
            perhaps transitions to a description of the episode.
          </p>
        </div>
      </div>
    );
  }
}

export default ControlPanel;
