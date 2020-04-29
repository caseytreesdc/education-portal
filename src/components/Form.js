import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // let fa_iframe = document.getElementsByClassName("Form__iframe");
    // console.log(fa_iframe);
    // let submit = fa_iframe.contentDocument;
    // console.log(submit);
  }

  render() {
    return (
      <div className="Form__iframe-Container">
        <iframe
          src="https://tfaforms.com/4821403"
          height="400"
          width="600"
          frameborder="0"
          scrolling="no"
        ></iframe>
        <script src="//tfaforms.com/js/iframe_resize_helper.js"></script>
      </div>
    );
  }
}

export default Form;
