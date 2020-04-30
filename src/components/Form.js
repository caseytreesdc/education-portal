import React from "react";

import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formSource: this.props.formSrc,
    };
  }

  render() {
    console.log(this.props);
    return (
      <div className="Form__iframe-Container">
        <iframe
          title="Form or Video?"
          src={this.props.formSrc}
          height="400"
          width="600"
          frameborder="0"
          scrolling="no"
          allowFullScreen
        ></iframe>
        {/* <script src="//tfaforms.com/js/iframe_resize_helper.js"></script> */}
      </div>
    );
  }
}

export default Form;
