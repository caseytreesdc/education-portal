import React from "react";

const Youtube = (props) => {
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={props.vidSrc}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Youtube;
