import React from "react";
import "./Form.css";
import form from "./testForm.html"

class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let fa_iframe = document.getElementsByClassName("Form__iframe");
    console.log(fa_iframe);
    let submit = fa_iframe.contentDocument;
    console.log(submit);
  }

  render() {
    return (
      <div className="Form__iframe-Container">
        <embed src={form}></embed>
      </div>
    );
  }
}

export default Form;
