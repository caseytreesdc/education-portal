import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let fa_iframe = document.querySelector("iframe");
    console.log(fa_iframe.contentWindow.document.getElementById);
  }

  render() {
    return (
      <div className="Form__iframe-Container">
        <iframe
          className=".Form__iframe"
          src="https://tfaforms.com/4821403"
          height="500"
          width="900"
          frameBorder="0"
        ></iframe>
        <script src="//tfaforms.com/js/iframe_resize_helper.js"></script>
      </div>
    );
  }
}

export default Form;
