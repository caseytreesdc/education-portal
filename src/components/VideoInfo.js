import React from "react";

import "./VideoInfo.css";
import CTButton from "./CTButton";

class VideoInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="VideoInfo">
        <Link to={props.panelButtonLink}>
          <CTButton blue text={props.panelButtonText}></CTButton>
        </Link>
        <div className="VideoInfo__text-box">
          <h3>{props.videoTitle}</h3>
          <p className="VideoInfo__description">{props.videoDescription}</p>
        </div>
      </div>
    );
  }
}

export default VideoInfo;
