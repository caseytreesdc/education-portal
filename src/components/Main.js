import React from "react";
import "./Main.css";

import Hero from "./Hero";
import Gallery from "./Gallery";

import theaterBackground from "../assets/theater-background-2.jpg";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formSrc: "https://tfaforms.com/4821826"
    };
  }

  render() {
    let formSources = {
      intro: "",
      ycyt2: "",
      citiSci: "",
      plantItForward: ""
    }
    console.log(formSources.intro)
    return (
      <div className="Main">
        <Hero formSrc={this.state.formSrc} backgroundImage={theaterBackground}></Hero>
        <div>
          <Gallery></Gallery>
        </div>
      </div>
    );
  }
}

export default Main;
